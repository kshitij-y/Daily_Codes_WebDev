function updateTime() {
    const time = new Date();
    const str = `${String(time.getHours())}:${String(time.getMinutes())}:${String(time.getSeconds())}`;
    console.clear();
    console.log(str);
}
setInterval(updateTime,1000);