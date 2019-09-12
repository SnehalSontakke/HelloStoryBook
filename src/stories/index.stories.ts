import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { WelcomingMsgComponent } from 'src/app/welcoming-msg/welcoming-msg.component';
import { CardComponent } from 'src/app/card/card.component';
//import { CardComponent } from '../src/app/card/card.component';
storiesOf('Kratin', module).add('Welcoming Everyone', () => ({
  component: WelcomingMsgComponent,
  props: {},
}),
{
  notes:"Welcome to everyone!"
});

storiesOf('Employees', module)
  .add(' Emp101 ', () => ({
    component: Button,
    props: {
      text: 'Hello Emp 101',
      onClick: action('Employee 101 button clicked'),
    },
  }),
  {
    notes:'Note to emp 101'
  }
  )
  .add(
    'Emp 102',
    () => ({
      component: Button,
      props: {
        text: 'Hello Emp 102',
        onClick: action('Employee 102 button clicked'),
      },
    }),
    { notes: 'Note to Emp 102' }
  )
  .add(
    'Emp 103',
    () => ({
      component: Button,
      props: {
        text: 'Hello Emp 103',
        onClick: action('Employee 103 button clicked'),
      },
    }),
    { notes: 'Note to Emp 103' }
  );

storiesOf('Welcome again', module).add('button with link to first story', () => ({
  component: Button,
  props: {
    text: 'Go to Kratin',
    onClick: linkTo('Kratin'),
  },
}));
//using card story
storiesOf('Card', module)
  .add('empty', () => ({
    component: CardComponent,
    props: {
      btnClicked: action('Empty card button clicked'),
    }
  }))
  .add('with title', () => ({
    component: CardComponent,
    props: {
      title: 'Hello card!',
      btnClicked: action('Card with title button clicked'),
    }
  }))
  .add('with title and subtitle', () => ({
    component: CardComponent,
    props: {
      title: 'Hello card!',
      subtitle: 'Well hello there 👋',
      btnClicked: action('Card with title and subtitle button clicked'),
    }
  }))
  // .add(
  //   'with notes',
  //   withNotes('Just a few notes about this story...')(() => ({
  //     component: CardComponent,
  //     props: {}
  //   }))
  // )
  .add('with action', () => ({
    component: CardComponent,
    props: {
      title: 'A card...',
      subtitle: 'Waiting to be clicked-on',
      btnClicked: action('👊 Button was clicked')
    }
  }));

// let's nest a story into our main `Card` stories
storiesOf('Card/nested', module).add('special card', () => ({
  component: CardComponent,
  props: {
    content: "I'm a card in a nested story!",
    btnClicked: action('I was clicked'),
  }
}));