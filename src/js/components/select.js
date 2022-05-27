const select = () => {
  const element = document.querySelector("#select");
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};

select();
