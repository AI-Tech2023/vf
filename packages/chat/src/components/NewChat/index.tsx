import clsx from 'clsx';
import { useContext, useMemo, useRef, useState } from 'react';

import { ClassName } from '@/constants';
import { AutoScrollProvider, RuntimeStateAPIContext, RuntimeStateContext } from '@/contexts';
import type { Nullish } from '@/types';
import { chain } from '@/utils/functional';

import { Header, type HeaderActionProps, type HeaderProps } from '../Header';
import { type INewFooter, NewFooter } from '../NewFooter';
import { Prompt } from '../Prompt';
import { Separator } from '../Separator';
import { type IWelcomeMessage, WelcomeMessage } from '../WelcomeMessage';
import { ChatContainer } from './ChatContainer/ChatContainer.component';
import { bottomSpacer, chatContainer, chatContentWrapper, chatEndedContainer, dialogContainer } from './NewChat.css';

export interface INewChat extends React.PropsWithChildren {
  welcomeMessageProps: IWelcomeMessage;
  headerProps: HeaderProps;
  footerProps: Omit<INewFooter, 'scrollableAreaRef'>;

  /**
   * If true, shows a loading indicator.
   */
  isLoading: boolean;

  /**
   * If true, shows audio interface controls.
   */
  audioInterface?: boolean;

  /**
   * If true, the user is using a mobile device.
   */
  isMobile?: boolean;

  /**
   * A unix timestamp indicating the start of the conversation.
   */
  startTime?: Nullish<number>;

  /**
   * A callback that is executed when the chat widget is minimized.
   */
  onMinimize?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * A callback that is executed when the conversation ends.
   */
  onEnd?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * If true, the conversation was ended by the agent.
   */
  hasEnded: boolean;

  /**
   * A callback to start a new conversation.
   */
  onStart?: (() => Promise<void>) | undefined;
}

const Chat: React.FC<INewChat> = ({
  headerProps,
  welcomeMessageProps,
  footerProps,
  hasEnded,
  onStart,
  onMinimize,
  onEnd,
  children,
  audioInterface,
  isMobile,
}) => {
  const [hasAlert, setAlert] = useState(false);

  const { config, toggleAudioOutput } = useContext(RuntimeStateAPIContext);
  const state = useContext(RuntimeStateContext);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (hasEnded) {
      onEnd?.(event);
    } else {
      setAlert(true);
    }
  };

  const handleResume = (_: any): void => setAlert(false);

  const headerActions = useMemo<HeaderActionProps[]>(() => {
    const items: HeaderActionProps[] = [{ svg: 'reset', onClick: handleClose }];
    if (isMobile) {
      items.push({ svg: 'close', onClick: onMinimize });
    }

    if (audioInterface) {
      items.unshift({
        svg: state.audioOutput ? 'volume' : 'mute',
        onClick: toggleAudioOutput,
      });
    }

    return items;
  }, [config.render, handleClose, onMinimize, state.audioOutput, audioInterface]);

  const scrollableAreaRef = useRef<HTMLDivElement>(null);

  return (
    <div className={clsx(ClassName.CHAT, chatContainer({ mobile: isMobile }))}>
      <Header {...headerProps} actions={headerActions} />
      <AutoScrollProvider target={scrollableAreaRef}>
        <div ref={scrollableAreaRef} className={dialogContainer}>
          <WelcomeMessage {...welcomeMessageProps} />
          <div className={chatContentWrapper}>
            {children}

            {hasEnded && !!state.session.turns.length && (
              <div className={chatEndedContainer}>
                <Separator text="Chat has ended" />
              </div>
            )}
            <div className={bottomSpacer({ hasEnded })} />
          </div>
        </div>
        <NewFooter {...footerProps} scrollableAreaRef={scrollableAreaRef} />
      </AutoScrollProvider>
      <Prompt
        visible={hasAlert}
        showOverlay={hasAlert}
        accept={{ label: 'Start new chat', onClick: chain(handleResume, onEnd, onStart) }}
        cancel={{ label: 'Cancel', onClick: handleResume }}
      />
    </div>
  );
};

export const NewChat = Object.assign(Chat, {
  Container: ChatContainer,
});
