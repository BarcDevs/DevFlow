import {Question, Tag, TopQuestion} from '@types'

export const topQuestions: TopQuestion[] = [
    {title: 'Would it be appropriate to point out an error in another paper during a referee report?', _id: '1'},
    {title: 'How can an airconditioning machine exist?', _id: '2'},
    {title: 'What is the difference between a computer and a calculator?', _id: '3'},
    {title: 'Interrogated every time crossing UK Border as citizen', _id: '4'},
    {title: 'What is an example of 3 numbers that do not make up a vector?', _id: '5'}
]

export const popularTags: Tag[] = [
    {name: 'react', count: 20879, _id: 'tag1'},
    {name: 'typescript', count: 20549, _id: 'tag2'},
    {name: 'javascript', count: 18265, _id: 'tag3'},
    {name: 'nodejs', count: 16087, _id: 'tag4'},
    {name: 'python', count: 14643, _id: 'tag5'},
    {name: 'html', count: 14089, _id: 'tag6'},
    {name: 'css', count: 13197, _id: 'tag7'},
    {name: 'angular', count: 12568, _id: 'tag8'}
]

export const questions: Question[] = [
    {
        _id: '1',
        title: 'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?',
        body: 'I\'m working on a Next.js project and want to implement Server-Side Rendering (SSR) for efficient data fetching. What are the best practices for data fetching in a Next.js application with SSR? How can I ensure that my data is pre-fetched on the server and passed to the client for improved performance and SEO?',
        createdAt: new Date('2023-01-01'),
        views: 7576,
        votes: {
            positive: 65,
            negative: 12
        },
        tags: [
            {
                _id: '1',
                name: 'NEXT.JS'
            }
        ],
        author: {
            _id: '91',
            name: 'John Doe',
            avatar: 'https://i.pravatar.cc/300'
        },
        answers: []
    },
    {
        _id: '2',
        title: 'How to set up authentication in a Next.js application?',
        body: 'I want to add authentication to my Next.js application. What are the best practices for setting up authentication in a Next.js application? How can I use a third-party authentication provider like Firebase or Auth0?',
        createdAt: new Date('2023-10-30 15:33:00'),
        views: 5678,
        votes: {
            positive: 98,
            negative: 3
        },
        tags: [
            {
                _id: '1',
                name: 'NEXT.JS'
            },
            {
                _id: '2',
                name: 'AUTHENTICATION'
            }
        ],
        author: {
            _id: '2',
            name: 'Jane Smith',
            avatar: 'https://i.pravatar.cc/300'
        },
        answers: []
    },
    {
        _id: '3',
        title: 'How to optimize images in a Next.js application?',
        body: 'I want to optimize the images in my Next.js application. What are the best practices for optimizing images in a Next.js application? How can I use a third-party image optimization service like Cloudinary or Imgix?',
        createdAt: new Date('2023-10-03'),
        views: 4567,
        votes: {
            positive: 78,
            negative: 2
        },
        tags: [
            {
                _id: '1',
                name: 'NEXT.JS'
            },
            {
                _id: '3',
                name: 'IMAGE_OPTIMIZATION'
            }
        ],
        author: {
            _id: '3',
            name: 'Bob Johnson',
            avatar: 'https://i.pravatar.cc/300'
        },
        answers: []
    }
]