// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
import './style.css'

type Row = Array<number>
type Display = Array<Row>
type Zeros = {
    [key: number]: number;
}


let zeros: Array<Zeros> = []
const dData: Display = [[0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],]


const updateDisplay = () => {
    const field = document.querySelector<HTMLDivElement>('#app')!
    field.innerHTML = ''
    addRandomNumber()
    for (let row of dData) {
        for (let num of row) {
            const block = document.createElement('div');
            block.classList.add('block', `block-${num}`)
            block.innerHTML = `${num}`
            field.appendChild(block)
        }
    }
}

const findZeros = () => {
    zeros.length = 0
    for (let iRow in dData) {
        for (let iNum in dData[iRow]) {
            if (dData[iRow][iNum] === 0) {
                zeros.push({[+iRow]: +iNum})
            }
        }
    }
}

const addRandomNumber = () => {
    findZeros()
    const randomZero: Zeros = zeros[Math.floor(Math.random() * zeros.length)]
    const key: number = +Object.keys(randomZero)[0]
    dData[key][randomZero[key]] = (Math.floor(Math.random() * 4) === 3 ? 4 : 2)
}

const sumUp = () => {
    for (let row in dData) {
        for (let i = 1; i < dData[row].length; i += 1) {
            let currentPosition: number = i
            while (currentPosition > 0 && dData[row][currentPosition - 1] === 0) {
                dData[row][currentPosition - 1] = dData[row][currentPosition]
                dData[row][currentPosition] = 0
                currentPosition -= 1
            }
            if (currentPosition > 0 && dData[row][currentPosition - 1] === dData[row][currentPosition]) {
                dData[row][currentPosition - 1] *= 2
                dData[row][currentPosition] = 0
            }
        }
    }
}

const rotate = () => {
    const n: number = 4
    for (let i = 0; i < n / 2; i += 1) {
        for (let j = i; j < n - i - 1; j += 1) {
            const temp: number = dData[i][j]
            dData[i][j] = dData[j][n - 1 - i]
            dData[j][n - 1 - i] = dData[n - 1 - i][n - 1 - j]
            dData[n - 1 - i][n - 1 - j] = dData[n - 1 - j][i]
            dData[n - 1 - j][i] = temp
        }
    }
}



updateDisplay()
// console.log(dData)

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        sumUp()
    } else if (e.key === 'ArrowUp') {
        rotate()
        sumUp()
        rotate()
        rotate()
        rotate()
    }
    else if (e.key === 'ArrowRight') {
        rotate()
        rotate()
        sumUp()
        rotate()
        rotate()
    }
    else if (e.key === 'ArrowDown') {
        rotate()
        rotate()
        rotate()
        sumUp()
        rotate()
    }

    updateDisplay()
    // console.log(dData)
})