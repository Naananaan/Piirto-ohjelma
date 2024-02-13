import { Circle } from "./class/Circle.js";

const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('#drawButton')
const radio_form = document.querySelector('#shapeForm') 
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

if (!canvas) {
    console.error("Canvas element not found!");
} else {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("2D context not supported!");
    } else {
        console.log("Canvas and 2D context are available.");
    }
}

const updateUI = (label3, label4) => {
    const fourthLabel = document.querySelector('div#fourth label');
    fourthLabel.innerHTML = label3;

    if (label4 !== undefined) {
        fourthLabel.style.display = label4;
        fourthLabel.style.display = "inline-block";
        document.querySelector('div#fourth input').style.display = "inline-block";
    } else {
        fourthLabel.style.display = "none";
        document.querySelector('div#fourth input').style.display = "none";
    }
}

radio_form.addEventListener('click', () => {
    const shape = radio_form['shape'].value;
    switch (shape) {
        case 'line':
            updateUI('x2:', 'y2:');
            break;
        case 'circle':
            updateUI('width:');
            break;
        case 'rectangle':
            updateUI('width:', 'height:');
            break;
        case 'square':
            updateUI('width:');
            break;
    }
});

const drawShape = () => {
    const shape = radio_form['shape'].value;
    const color = document.querySelector('#color').value;
    const lineWidth = parseInt(document.querySelector('#lineWidth').value);

    if (shape === 'line') {
        const x1 = parseInt(x_input.value);
        const y1 = parseInt(y_input.value);
        const x2 = parseInt(document.querySelector('div#third input').value);
        const y2 = parseInt(document.querySelector('div#fourth input').value);

        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    } else if (shape === 'circle') {
        const x = parseInt(x_input.value);
        const y = parseInt(y_input.value);
        const width = parseInt(document.querySelector('div#third input').value);
        const circle = new Circle(x, y, width / 2);

        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        circle.draw(ctx);
    } else if (shape === 'rectangle') {
        const x = parseInt(x_input.value);
        const y = parseInt(y_input.value);
        const width = parseInt(document.querySelector('div#third input').value);
        const height = parseInt(document.querySelector('div#fourth input').value);

        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
    } else if (shape === 'square') {
        const x = parseInt(x_input.value);
        const y = parseInt(y_input.value);
        const size = parseInt(document.querySelector('div#third input').value);

        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.rect(x, y, size, size);
        ctx.stroke();
    }
}

draw_button.addEventListener('click', drawShape);