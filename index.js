function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function del() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
