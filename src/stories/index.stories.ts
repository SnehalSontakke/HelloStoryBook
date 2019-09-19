import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Button, Welcome } from '@storybook/angular/demo';
import { WelcomingMsgComponent } from 'src/app/welcoming-msg/welcoming-msg.component';
import { CardComponent } from 'src/app/card/card.component';

storiesOf('Kratin', module).add('Welcoming Everyone', () => ({
  component: WelcomingMsgComponent,
  props: {
    wlc:"welcome team",
  },
}),
  {
    notes: "Welcome to everyone!"
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
      notes: 'Note to emp 101'
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
      content:'Card from storybook',
      text:'Click card button'
    }
  }))
  
  .add('with title', () => ({
    component: CardComponent,
    props: {
      title: 'Hello card!',
      btnClicked: action('Card with title button clicked'),
      text:'Click card button'
    }
  }))
 

  .add('with action', () => ({
    component: CardComponent,
    props: {
      title: 'A card...',
      subtitle: 'Waiting to be clicked-on',
      btnClicked: action('👊 Button was clicked'),
      text:'Click card button'
    }
  }));
storiesOf('Form', module).add('name form ', () => ({
  component:Button,
  template:
    `
    First name: <input type="text" name="fname" id="fn"><br>
    Last name: <input type="text" name="lname" id="ln"><br>
    <input type="submit" value="Submit">
  `,
  props:
  {
    onClick: (event: any) => {
      console.log("i am clicked");
      console.log(event);
    },
  },



}));

//example button component
storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [Button],
    })
  )
  .add('with text', () => ({
    template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
    props: {
      text: 'Check if click works in console',
      onClick: (event: any) => {
        console.log('clicked reflected in console');
        console.log(event);
      },
    },
  }))
  .add('with some emoji', () => ({
    template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
    props: {
      text: '😀 😎 👍 💯',
      onClick: (event: any) => {
        console.log('clicked emoji button reflected in console');
        console.log(event);
      },
    },
  }));
//Custom styling
storiesOf('Custom|Style', module)
  .addDecorator(
    moduleMetadata({
      declarations: [Button],
    })
  )
  .add('Style1', () => ({
    template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
    props: {
      text: 'Button with custom styles',
      onClick: action('log'),
    },
    styles: [
      `
      storybook-button-component {
        background-color: gray;
        padding: 5px;
        color:blue;
      }
    `,
    ],
  }))
//example of notes addon

storiesOf('Addon|Notes', module)
  .add(
    'Simple note',
    () => ({
      component: Button,
      props: {
        text: 'Notes on some Button',
        onClick: () => { },
      },
    }),
    { notes: 'My notes on some button' }
  )
  .add(
    'Note with HTML',
    () => ({
      component: Button,
      props: {
        text: 'Notes with HTML',
        onClick: () => {
          console.log("note with html clicked");
        },
      },
    }),
    {
      notes: ` 
    <h2>My notes on emojis</h2>
    <em>It's not all that important to be honest, but..</em> 
    Emojis are great, I love emojis, in fact I like using them in my Component notes too! 😇
  `,
    }
  );
 //knobs
 const stories = storiesOf('Storybook Knobs', module);

// "withKnobs" decorator should be applied before the stories using knobs
stories.addDecorator(withKnobs);

// Knobs for Angular props
stories.add('Using button', () => ({
  component: Button,
  props: {
   text: text('text', 'Hello Team'), 
  },
}));
