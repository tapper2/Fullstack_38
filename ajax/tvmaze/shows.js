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
      _function(data)
    },
    error: function (error) {
      console.log('error : ', error)
    },
  })
}

function printShowsToHtml(data) {
  shows = data
  shows.map((show) => {
    let str = `
      <div class="card col-3">
    <img class="card-img-top" src="${
      show.image ? show.image.medium : ''
    }" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${show.name}</h5>
      <p class="card-text">${show.summary}</p>
      <a href="#" class="btn btn-primary" onClick="tvShowClicked(${
        show.id
      })">Go somewhere</a>
    </div>
  </div>
    `

    showsDV.innerHTML += str
  })

  console.log('SHOWS : ', shows)
}

function printSingleShowDetails(data) {
  showsSingleDV.innerHTML = `
    <div>name: ${data.name}</div>
    <div>title: ${data.summary}</div>
  `
  console.log('TvShowDetails : ', data)
}

function tvShowClicked(id) {
  console.log(id)
  callAjax(printSingleShowDetails, id)
}

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
