import {PressableProps} from 'react-native';
import {Except} from 'type-fest';

export type ButtonTypes = FilledButtonType | OutFilledButtonType | PlusButtonType | MiniButtonType;

export interface ButtonBaseType extends PressableProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  onPress: () => void;
}

export type FilledButtonType = ButtonBaseType;
export type OutFilledButtonType = ButtonBaseType;
export type PlusButtonType = Except<ButtonBaseType, 'text'> & {
  filled?: boolean;
};
export type MiniButtonType = ButtonBaseType & {
  icon?: string;
};

// export type ActivityBook = ActivityBase & {
//   intro: string
//   chapters: ActivityBookChaptersInterface[]
// }
// export type ActivityFeedback = Except<ActivityBase, 'value'> & {
//   questions: ActivityFeedbackQuestion[]
// }
// export type ActivityQuiz = Except<ActivityBase, 'value'> & {
//   userAttemps: number
//   userAttempsDetail: ActivityQuizUserAttempsDetail[]
//   questions: ActivityQuizQuestion[]
// }
// export type ActivityForum = ActivityBase & {
//   forum: ActivityForumDetail[]
//   idforum: string
// }
