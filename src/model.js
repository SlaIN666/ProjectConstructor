import image from './assets/image.png'
import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from './classes/blocks'

const text = `
Sed ut perspiciatis unde omnis: <a href="https://www.youtube.com/watch?v=JJQPHgJCCOo" target="_blank"> iste natus error sit voluptatem accusantium doloremque laudantium,
`

export const model = [
    new TitleBlock('Конструктор на JS', 
        {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0899, #493240)',
                color: '#fff',
                padding: '1rem',
                'text-align': 'center',
            }
        }
    ),
    new TextBlock(text, {
            styles: {
                background: 'linear-gradient(to bottom, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold',
            }
        }
    ),
    new ImageBlock(image, {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center',
            },
            imageStyles: {
                width: '500px',
                height: 'auto',
            },
            alt: `It's an image!`,
        }
    ),
    new ColumnsBlock(
        [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        ], 
        {
            styles: {
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 23%, rgba(0,212,255,1) 100%)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold',
            }
        }
    ),
]