let total = 0;
let completed = 0;

function addTask() {
  let subject = document.getElementById("subject").value;
  let date = document.getElementById("date").value;

  if (!subject || !date) {
    alert("Please enter subject and date");
    return;
  }

  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.onchange = function() {
    if (this.checked) completed++;
    else completed--;
    updateProgress();
  };

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(" " + subject + " - " + date));

  document.getElementById("taskList").appendChild(li);

  total++;
  updateProgress();
}

function updateProgress() {
  let percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  document.getElementById("progress").innerText = "Progress: " + percent + "%";
}
