/* 
===================================
🖥️ BOM - screen Object
===================================

1️⃣ What is this?
------------------
The `screen` object provides information about the user’s display screen, such as total resolution, available workspace, and color depth.

2️⃣ Why does it matter?
------------------------
✅ Helps optimize UI for different screen sizes and resolutions  
✅ Useful for full‑screen applications (games, presentations)  
✅ Allows tailoring graphics or layout based on color capabilities  

3️⃣ Why and when to use?
-------------------------
✅ Adjust canvas or game viewport to screen resolution  
✅ Detect dual‑monitor setups by checking available dimensions  
✅ Choose appropriate image/media quality based on screen color depth  

4️⃣ Snippets:
--------------
*/

console.log("Screen width:", screen.width);
console.log("Screen height:", screen.height);
console.log("Available width (minus OS taskbars):", screen.availWidth);
console.log("Available height:", screen.availHeight);
console.log("Color depth (bits per pixel):", screen.colorDepth);
console.log("Pixel depth:", screen.pixelDepth);

// Open element in full-screen mode (if supported)
function goFullScreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
// Exit full-screen
function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}


//5️⃣ Real-World Examples:
//-------------------------

//✅ **Canvas Resizing**:  
const canvas = document.querySelector("canvas");
canvas.width = screen.width;
canvas.height = screen.height;

// ✅ Full‑Screen Presentation:
const slide = document.getElementById("slide");
slide.onclick = () => goFullScreen(slide);

// ✅ Media Quality Selection:
const quality = screen.colorDepth > 24 ? "high" : "medium";
loadVideoQuality(quality);

/*
6️⃣ Interview Tips:
❓ Q: What’s the difference between screen.width and screen.availWidth?
✅ A: availWidth excludes OS taskbars or docked toolbars, while width is total screen width.

❓ Q: How do you trigger full-screen mode?
✅ A: Use element.requestFullscreen() (with vendor prefixes if needed).

❓ Q: How can you detect color depth?
✅ A: Use screen.colorDepth, which returns bits per pixel.

🔥 Bonus: Use screen.orientation API to detect and respond to screen rotation on mobile devices.
*/
