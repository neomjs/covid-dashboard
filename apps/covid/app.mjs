import MainContainer from './view/MainContainer.mjs';
console.log(1);
const onStart = () => Neo.app({
    mainView: MainContainer,
    name    : 'Covid'
});

export {onStart as onStart};
