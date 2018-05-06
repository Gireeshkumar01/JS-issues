document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(){
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueSeverity = document.getElementById('severityInput').value;
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issueId = chance.guid();
  var issueStatus ='open';

  var issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus,
  }
  console.log(issue);

  if (localStorage.getItem('issues')==null){
    var  issues = [];
    issues.push(issue);
    localStorage.setItem('issues',JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem("issues"));
    issues.push(issue);
    localStorage.setItem('issues',JSON.stringify(issues));
  }
  console.log(issues);
  document.getElementById('issueInputForm').reset();
  fetchIssues();
  e.preventDefault();

}




function fetchIssues(){
  var issues = JSON.parse(localStorage.getItem("issues"));
  var issuesList = document.getElementById("issuesList");

  issuesList.innerHTML = '';

  for(i=0; i<= issues.length; i++){
    var id = issues[i].id;
    var status = issues[i].status;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;

    issuesList.innerHTML += '<div class="well">'+
                            '<h6>Issue Id:' + id + '<h6>'+
                            '<p>status</p>'+
                            '<h3>'+ desc+'</h3>'+
                            '<p>'+severity+'</p>'+
                            '<p>'+ assignedTo+'</p>'+
                            '<a href= "#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">close</a>'+
                            '<a href= "#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">delete</a>'+
                            '</div>';
  }

}
