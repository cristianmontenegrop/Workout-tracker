const init = async () => {
  if (window.location.search.split('=')[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      const idIs = '?id=';
      window.location.search = idIs + workout._id;
    } else {
      document.querySelector('#continue-btn').classList.add('d-none');
    }
  }
};

init();
