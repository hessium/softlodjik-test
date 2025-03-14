import './styles/main.scss'
import { useState } from 'react'
import {Sidebar} from "./components/sidebar/sidebar.jsx";
import {ProjectList} from "./components/projects-list/project-list.jsx";


const data = [
    {
        id: '663с7…a2d1',
        name : 'Пролет №1',
        img: '/assets/images/project1.png',
        type: 'photo',
        date: '23.01.2023',
        tags: [
            {
                name: 'Лес',
                color: 'green'
            },
            {
                name: 'Кадры',
                color: 'orange'
            }
        ],
        countsFiles: 12,
        counts: 12,
    },
    {
        id: '663с7…a2d2',
        name : 'Пролет №2',
        img: '/assets/images/project2.png',
        type: 'video',
        date: '23.01.2023',
        tags: [
            {
                name: 'Лес',
                color: 'green'
            },
            {
                name: 'Пролеты',
                color: 'red'
            }
        ],
        countsFiles: 2,
        counts: 12,
    },
    {
        id: '663с7…a2d3',
        name : 'Пролет №2',
        img: '/assets/images/project2.png',
        type: 'video',
        date: '23.01.2023',
        tags: [
            {
                name: 'Лес',
                color: 'green'
            },
            {
                name: 'Пролеты',
                color: 'red'
            }
        ],
        countsFiles: 2,
        counts: 12,
    },
    {
        id: '663с7…a2d4',
        name : 'Пролет №4',
        img: '/assets/images/project1.png',
        type: 'photo',
        date: '23.01.2023',
        tags: [
            {
                name: 'Лес',
                color: 'green'
            },
            {
                name: 'Кадры',
                color: 'orange'
            }
        ],
        countsFiles: 12,
        counts: 12,
    },
    {
        id: '663с7…a2d5',
        name : 'Пролет №5',
        img: '/assets/images/project1.png',
        type: 'photo',
        date: '23.01.2023',
        tags: [
            {
                name: 'Лес',
                color: 'green'
            },
            {
                name: 'Кадры',
                color: 'orange'
            }
        ],
        countsFiles: 12,
        counts: 12,
    },
    {
        id: '663с7…a2d6',
        name : 'Пролет №6',
        img: '/assets/images/project2.png',
        type: 'photo',
        date: '23.01.2023',
        tags: [
            {
                name: 'Лес',
                color: 'green'
            },
            {
                name: 'Пролеты',
                color: 'red'
            }
        ],
        countsFiles: 12,
        counts: 12,
    },
    {
        id: '663с7…a2d7',
        name : 'Пролет №7',
        img: '/assets/images/project2.png',
        type: 'photo',
        date: '23.01.2023',
        tags: [
            {
                name: 'Лес',
                color: 'green'
            },
            {
                name: 'Кадры',
                color: 'orange'
            }
        ],
        countsFiles: 12,
        counts: 12,
    },
    {
        id: '663с7…a2d8',
        name : 'Пролет №8',
        img: '/assets/images/project1.png',
        type: 'photo',
        date: '23.01.2023',
        tags: [
            {
                name: 'Лес',
                color: 'green'
            },
            {
                name: 'Кадры',
                color: 'orange'
            }
        ],
        countsFiles: 12,
        counts: 12,
    },
    {
        id: '663с7…a2d9',
        name : 'Пролет №9',
        img: '/assets/images/project1.png',
        type: 'photo',
        date: '23.01.2023',
        tags: [
            {
                name: 'Лес',
                color: 'green'
            },
            {
                name: 'Кадры',
                color: 'orange'
            }
        ],
        countsFiles: 12,
        counts: 12,
    },
    {
        id: '663с7…a2d10',
        name : 'Пролет №10',
        img: '/assets/images/project2.png',
        type: 'video',
        date: '23.01.2023',
        tags: [
            {
                name: 'Лес',
                color: 'green'
            },
            {
                name: 'Кадры',
                color: 'orange'
            }
        ],
        countsFiles: 4,
        counts: 12,
    }
]

function App() {
  const [projects, setProjects] = useState(data)


  return (
    <>
      <Sidebar />
      <main>
       <ProjectList projects={projects} />
      </main>
    </>
  )
}

export default App
