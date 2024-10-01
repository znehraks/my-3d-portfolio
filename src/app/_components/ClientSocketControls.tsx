/* eslint-disable no-console */
import { useEffect } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import {
  AlreadyDisplayedRecentChatsAtom,
  ChatsAtom,
  EnteredPlayerNoticeAtom,
  ExitedPlayerNoticeAtom,
  MeAtom,
  PlayersAtom,
  RecentChatsAtom,
} from '@/store';
import { socket } from '@/clientSocket';
import { IChat, INotice, IPlayer } from '@/types';
import { uniqBy } from 'lodash-es';

export function ClientSocketControls() {
  const setPlayers = useSetAtom(PlayersAtom);
  const [me, setMe] = useAtom(MeAtom);
  const [chats, setChats] = useAtom(ChatsAtom);
  const setRecentChats = useSetAtom(RecentChatsAtom);
  const alreadyDisplayedRecentChats = useAtomValue(AlreadyDisplayedRecentChatsAtom);
  const setEnterNotice = useSetAtom(EnteredPlayerNoticeAtom);
  const setExitNotice = useSetAtom(ExitedPlayerNoticeAtom);

  useEffect(() => {
    const handleConnect = () => {
      console.info('connected');
    };
    const handleDisconnect = () => {
      console.info('disconnected');
    };

    const handleInitialize = (value: IPlayer) => {
      setMe(value);
    };

    const handleEnter = (value: INotice) => {
      setEnterNotice(value);
    };

    const handleExit = (value: INotice) => {
      setExitNotice(value);
    };

    const handlePlayers = (value: IPlayer[]) => {
      console.log(value);
      setPlayers(value);
      const newMe = value.find((p) => p?.id === me?.id);
      console.log('newMe', newMe);
      if (newMe) {
        setMe(newMe);
      }
    };

    const handleNewText = ({ senderId, senderNickname, senderJobPosition, text, timestamp }: IChat) => {
      setChats((prev) => [...prev, { senderId, senderNickname, senderJobPosition, text, timestamp }]);

      const uniqRecentChats = uniqBy(
        [...chats, { senderId, senderNickname, senderJobPosition, text, timestamp }].reverse(),
        'senderId',
      );

      setRecentChats(
        uniqRecentChats.filter(
          (chat) =>
            !alreadyDisplayedRecentChats.some(
              (alreadyChats) => alreadyChats.senderId === chat.senderId && alreadyChats.timestamp === chat.timestamp,
            ),
        ),
      );
    };

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('initialize', handleInitialize);
    socket.on('enter', handleEnter);
    socket.on('exit', handleExit);
    socket.on('players', handlePlayers);
    socket.on('newText', handleNewText);
    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('initialize', handleInitialize);
      socket.off('enter', handleEnter);
      socket.off('exit', handleExit);
      socket.off('players', handlePlayers);
      socket.off('newText', handleNewText);
    };
  }, [
    alreadyDisplayedRecentChats,
    chats,
    me,
    me?.id,
    setChats,
    setEnterNotice,
    setExitNotice,
    setMe,
    setPlayers,
    setRecentChats,
  ]);
  return null;
}
