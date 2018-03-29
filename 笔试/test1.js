function bookTodayMovieForTodatUser() {
  return new Promise(function (resolve, reject) {
    var userIdList,moviesList

    async function getMoviesAndUser() {
      var f1 = await getTodayUsers(userIds => {userIdList=userIds})
      var f2 = await getTodayMovie(movieId => {moviesList=movieId})
      return bookMovieForUsers(f1,f2,function () {
        return
      })
    }
    getMoviesAndUser();
  })
}


