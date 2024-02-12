// Function Definition //
const addNumberFetch = async (num1, num2) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/TwoNumber/AddTwoNumbers/${num1}/${num2}`);
    const data = await promise.text();

    return data;
}

const questionOneFetch = async (question1) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/AskQuestion/AskFirstQuestion/${question1}`);
    const data = await promise.text();

	return data;
}

const questionTwoFetch = async (question2) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/AskQuestion/AskSecondQuestion/${question2}`);
    const data = await promise.text();

	return data;
}

const compareNumberFetch = async (num1, num2) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/GreaterOrLess/GreaterOrLessThan/${num1}/${num2}`);
    const data = await promise.text();

	return data;
}

const MadLibFetch = async (field1, field2, field3, field4, field5, field6, field7, field8, field9, field10) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/MadLib/CreateStory/${field1}/${field2}/${field3}/${field4}/${field5}/${field6}/${field7}/${field8}/${field9}/${field10}`);
    const data = await promise.text();

	return data;
}

const OddEvenFetch = async (num) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/OddEven/OddOrEven/${num}`);
    const data = await promise.text();
	
	return data;
}

const ReverseNumFetch = async (numSeq) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/ReverseNum/ReverseNum/${numSeq}`);
    const data = await promise.text();

	return data;
}

const ReverseABCFetch = async (abcSeq) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/reverseABC/reverseABC/${abcSeq}`);
    const data = await promise.text();

	return data;
}

const EightBallFetch = async (question) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/EightBall/AskQuestion/${question}`);
    const data = await promise.text();

	return data;
}

const CategoryCountryFetch = async (country) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/RestaurantPicker/CategoryOrigin/${country}`);
    const data = await promise.text();

	return data;
}

const CategoryFoodFetch = async (food) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/RestaurantPicker/CategoryFood/${food}`);
    const data = await promise.text();

	return data;
}

const CategoryRatingFetch = async (rating) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/RestaurantPicker/CategoryRating/${rating}`);
    const data = await promise.text();

	return data;
}

const NameGreetingFetch = async (name) => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/Greeting/GetName/${name}`);
    const data = await promise.text();

	return data;
}

export {addNumberFetch, questionOneFetch, questionTwoFetch, compareNumberFetch, MadLibFetch, OddEvenFetch, ReverseNumFetch, ReverseABCFetch, EightBallFetch, CategoryCountryFetch, CategoryFoodFetch, CategoryRatingFetch, NameGreetingFetch}