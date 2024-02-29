import { Block } from "payload/types";

const Hero:Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks'
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text'
    },
    {
      name: 'text',
      label: 'Text',
      type: 'textarea',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      label: 'Background Image',
      relationTo: 'media'
    }
  ]
}

export default Hero;