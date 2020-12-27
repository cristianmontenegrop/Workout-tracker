const API = {

  async getLastWorkout() {
    let res;
    try {
      res = await fetch('/api/workouts');
    } catch (err) {
      console.log(err);
    }

    const json = await res.json();
    return json[json.length - 1];
  },

  async addExercise(data) {
    const id = window.location.search.split('=')[1];
    const apiWorkouts = '/api/workouts/';

    console.log('addExercise() ID: ', id);

    const res = await fetch(apiWorkouts + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    return json;
  },

  async createWorkout(data = {}) {
    const res = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await res.json();
    return json;
  },

  async getWorkoutsInRange() {
    let data;
    fetch('/api/workouts/range')
      .then((res) => { data = res.json(); })
      .catch((err) => console.log(err));

    return data;
  },
};
