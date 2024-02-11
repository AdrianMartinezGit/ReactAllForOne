// Function Definition //
const addNumberFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/TwoNumber/AddTwoNumbers/${addNumberOne.value}/${addNumberTwo.value}`);
    const data = await promise.text();

    return data;
}

const questionOneFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/AskQuestion/AskFirstQuestion/${questionOne.value}`);
    const data = await promise.text();

	return data;
}

const questionTwoFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/AskQuestion/AskSecondQuestion/${questionTwo.value}`);
    const data = await promise.text();

	return data;
}

const compareNumberFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/GreaterOrLess/GreaterOrLessThan/${compareNumberOne.value}/${compareNumberTwo.value}`);
    const data = await promise.text();

	return data;
}

const MadLibFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/MadLib/CreateStory/${fieldOne.value}/${fieldTwo.value}/${fieldThree.value}/${fieldFour.value}/${fieldFive.value}/${fieldSix.value}/${fieldSeven.value}/${fieldEight.value}/${fieldNine.value}/${fieldTen.value}`);
    const data = await promise.text();

	return data;
}

const OddEvenFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/OddEven/OddOrEven/${numberOE.value}`);
    const data = await promise.text();
	
	return data;
}

const ReverseNumFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/ReverseNum/ReverseNum/${reverseNum.value}`);
    const data = await promise.text();

	return data;
}

const ReverseABCFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/reverseABC/reverseABC/${reverseABC.value}`);
    const data = await promise.text();

	return data;
}

const EightBallFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/EightBall/AskQuestion/${ballQuestion.value}`);
    const data = await promise.text();

	return data;
}

const CategoryCountryFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/RestaurantPicker/CategoryOrigin/${restaurantPickOne.value}`);
    const data = await promise.text();

	return data;
}

const CategoryFoodFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/RestaurantPicker/CategoryFood/${restaurantPickTwo.value}`);
    const data = await promise.text();

	return data;
}

const CategoryRatingFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/RestaurantPicker/CategoryRating/${restaurantPickThree.value}`);
    const data = await promise.text();

	return data;
}

const NameGreetingFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/Greeting/GetName/${nameEnter.value}`);
    const data = await promise.text();

	return data;
}