import { ReactNode } from 'react';

import { Signal } from '../components/signal';
import { Countdown } from '../components/countdown';
import { AudioPlayer } from '../components/audio_player';

export type TimelineItem = {
  id: string; // 一意なID
  time: number; // 表示開始時間 (秒、小数点以下2桁まで)
  duration: number; // 表示時間 (秒、小数点以下2桁まで)
  component: ReactNode;
}

const createSignalTimelineItem = (signalId: number, time: number): TimelineItem => {
  return {
    id: `s${signalId}-${time}`,
    time,
    duration: 10,
    component: <Signal signalId={signalId} />
  };
};

export const timelineData: TimelineItem[] = [
  {
    id: 'countdown',
    time: 0,
    duration: 10,
    component: <Countdown countdownSec={10} />,
  },
  {
    id: 'track',
    time: 10,
    duration: 150,
    component: <AudioPlayer src="/track.mp3" autoPlay preload volume={0.3} />,
  },
  createSignalTimelineItem(5, 10),
  createSignalTimelineItem(36, 20), // 緑
  createSignalTimelineItem(52, 30), // 水色
  createSignalTimelineItem(66, 40), // ライトピンク
  createSignalTimelineItem(76, 50), // オレンジ
  createSignalTimelineItem(15, 60), // 消灯
  createSignalTimelineItem(21, 70), // ライトピンク点滅
  createSignalTimelineItem(105, 80), // 高速 赤 オレンジ ピンク 黄 緑 水 青 紫
  createSignalTimelineItem(38, 90), // 長ピンク 短水
  createSignalTimelineItem(15, 100), // 消灯
  createSignalTimelineItem(92, 110), // 赤
  createSignalTimelineItem(113, 120), // 紫
  createSignalTimelineItem(120, 130), // 青
  createSignalTimelineItem(124, 140), // ピンク
  createSignalTimelineItem(15, 150), // 消灯
];
