$('#audio').on('timeupdate', function() {
    $('#seekbar').attr("value", this.currentTime / this.duration);
});