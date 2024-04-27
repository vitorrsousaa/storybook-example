import { Button } from "@/components/Button";
import type {Meta,StoryObj} from '@storybook/react'
import {action} from '@storybook/addon-actions'

const meta = {
  title: 'Components/Button',
  component: Button,
  // tags:['autodocs'],
  args:{
    children: "Button",
    variant: 'default',
    size: 'default',
    onClick: action('onClick')
  },
  argTypes:{
    disabled:{
      control: 'boolean',
      // table: {
      //   type: {
      //     summary: 'boolean',
      //   }
      // }
    },
    size: {
      options: ['default','sm','lg', 'icon'],
      control: {
        type: 'inline-radio',
        labels:{
          sm: 'Small (sm)',
          lg: 'Large (lg)',
          icon: 'Icon (icon)'
        }
      },
      // table: {
      //   type:{
      //     summary: 'enum (string)',
      //     detail: '"default" | "sm" | "lg" | "icon"'
      //   },
      //   defaultValue:{
      //     summary: 'default'
      //   },
      // }
    },
    variant: {
      options: ['default','secondary','destructive', 'link', 'ghost', 'outline'],
      control: 'select',
      if:{
        arg: 'size',
        eq: 'default'
      },
      // table: {
      //   type:{
      //     summary: 'enum (string)',
      //     detail: '"default" | "secondary" | "destructive" | "link" | "ghost" | "outline"'
      //   },
      //   defaultValue:{
      //     summary: 'default'
      //   },
      // }
    },
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default:Story = {}

export const Secondary:Story = {
  name: 'Secondary',
  args: {
    children:"Secondary",
    variant: "secondary"
  },
  render: (props) =>(
    <Button  {...props}>
      <span className="mr-1">🔥</span>
      Secondary
    </Button>
  )
}