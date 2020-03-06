import axios from "axios";

export default {
  // Gets all songs
  getMusic: function() {
    return axios.get("/api/music");
  },
  // Gets the song with the given id
  getMusics: function(id) {
    return axios.get("/api/music/" + id);
  },
  // Deletes the song with the given id
  deleteMusic: function(id) {
    return axios.delete("/api/music/" + id);
  },
  // Saves a song to the database
  saveMusic: function(musicData) {
    return axios.post("/api/music", musicData);
  },
  // updateMusic: function () {
  //   return axios.get("/api/music", musicData);
  // }
};
