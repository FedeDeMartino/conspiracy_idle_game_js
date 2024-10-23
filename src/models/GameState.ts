import { Conspiracy } from './Conspiracy';

export interface IGameState {
  followers: number,
  followersPerClick: number,
  followersPerSecond: number,
  donations: number,
  conspiracies: Conspiracy[];
  activeConspiracyDescription?: string | null;
  activeConspiracyName?: string | null;
}

const initialDescription = "You need to start small...\n" +
                           "Lately, you've been noticing some peculiar things.\n" +
                           "Subtle, but unsettling. At first, you shrugged it off—but now,\n" +
                           "it's all adding up.\n" +
                           "Why does everyone keep telling you to eat avocados?\n" +
                           "Sure, they say it's 'good for your health,' but hang on...\n" +
                           "your parents, and their parents, didn't need avocados,\n" +
                           "and they were just fine. So why now, all of a sudden, are they everywhere?\n" +
                           "Something's off. It's not just the toast... it's that massive pit.\n" +
                           "Could it be? Maybe there’s more to avocados than meets the eye.\n" +
                           "What if that pit isn't just a seed... what if it's hiding something?\n" +
                           "A chip, perhaps? A secret listening device, tucked inside every avocado,\n" +
                           "tracking your every word... every move...\n" +
                           "Yes! That must be it! The avocado agenda is real,\n" +
                           "and it's time to blow this wide open!\n" +
                           "You have to spread the word before it's too late!!!"

export const initialGameState: IGameState = {
  followers: 0,
  followersPerClick: 1,
  followersPerSecond: 0,
  donations: 0,
  conspiracies: [new Conspiracy('Avocado Agenda', 10, 0, initialDescription)],
  activeConspiracyDescription: initialDescription,
  activeConspiracyName: 'Avocado Agenda'
};
