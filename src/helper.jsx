export function getDifferentYear(year) {
    return new Date().getFullYear() - year;
}

export function calculateMark(mark) {
    let increment;

    switch(mark) {
        case "european": 
            increment = 1.30;
            break;
        case "american": 
            increment = 1.15;
            break;
        case "asian":
            increment = 1.05;
            break;
        default:
            break;
    }
    return increment;
}

export function getPlan(plan) {
    return (plan === "basic") ? 1.20 : 1.50;
}

export function capitalLetter(text) {
    switch (text){
        case "american":
            text = "Americano";
            break;
        case "european":
            text = "Europeo";
            break;
        case "asian":
            text = "Asiático";
            break;
        case "basic":
            text = "Básico";
            break;
        case "complete":
            text = "Completo";
            break;
        default:
            break;
    }
    return text;
}