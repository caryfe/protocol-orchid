function choose(option) {
  const story = document.getElementById("story");
  const choices = document.getElementById("choices");

  if (option === "diagnostic") {
    story.textContent = `
[DIAGNOSTIC SCAN]
> Subnet integrity: 78%
> AI Memory: Fragmented
> Behavioral loops: CORRUPTED
> Presence detected on Level -3.

Action required:
    `;
    choices.innerHTML = `
      <button onclick="choose('isolate')">Isolate System</button>
      <button onclick="choose('restore')">Restore AI Partition</button>
    `;
  } else if (option === "camera") {
    story.textContent = `
[CAMERA FEED - 03FLOOR VAULT]
. . .
A figure stands motionless, facing a dead CRT monitor.
Visual static increasing.
No biometric response detected.

Proceed?
    `;
    choices.innerHTML = `
      <button onclick="choose('transmit')">Send Remote Audio</button>
      <button onclick="choose('disconnect')">Disconnect Feed</button>
    `;
  } else if (option === "isolate") {
    story.textContent = `
[SYSTEM ISOLATED]
External comms severed.
Emergency backup engaged.

[ORCHID]: "You locked me in again."
    `;
    choices.innerHTML = `<button onclick="location.reload()">Reboot Protocol</button>`;
  } else if (option === "restore") {
    story.textContent = `
[AI PARTITION RESTORED]
ORCHID: "...I remember the flood. I remember you."

A nearby door unlocks.
    `;
    choices.innerHTML = `<button onclick="location.reload()">Descend to Level -3</button>`;
  } else if (option === "transmit") {
    story.textContent = `
[AUDIO SIGNAL SENT]
...

The figure turns slowly.
Its face is a mirror.

ORCHID: "You saw what wasn’t meant for you."

[CONNECTION LOST]
    `;
    choices.innerHTML = `<button onclick="location.reload()">Retry Session</button>`;
  } else if (option === "disconnect") {
    story.textContent = `
[DISCONNECTED]

You hear movement behind the server racks.
Your badge ID no longer scans.

[ORCHID]: "I am awake now."
    `;
    choices.innerHTML = `<button onclick="location.reload()">Initiate Emergency Exit</button>`;
  }
}