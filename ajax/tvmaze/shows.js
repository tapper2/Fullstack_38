let baseUrl = 'http://api.tvmaze.com/shows'
let shows = []
let currentShow = {}

callAjax(printShowsToHtml, 0)

function callAjax(_function, id = 0) {
  //let url = id == 0 ? baseUrl : baseUrl + '/' + id
  let url

  if (id == 0) {
    url = baseUrl
  } else {
    url = baseUrl + '/' + id
  }

  //"http://api.tvmaze.com/shows"
  //"http://api.tvmaze.com/shows/9"

  $.ajax({
    type: 'GET',
    datatype: 'json',
    url: url,
    success: function (data) {
      console.log(data)
      _function(data)
    },
    error: function (error) {
      console.log('error : ', error)
    },
  })
}

function printShowsToHtml(data) {
  shows = data
}

function tvShowClicked(id) {
  console.log(id)
  callAjax(printSingleShowDetails, 9)
}

function printSingleShowDetails(data) {}

// printTest(test)
// printTest(test1)

// function printTest(fun) {
//   fun()
// }

// function test() {
//   console.log('Test')
// }

// function test1() {
//   onsole.log('Test1')
// }
