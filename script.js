document.getElementById("get-started-btn").addEventListener("click", function() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("chat-screen").style.display = "block";
});

document.getElementById("say-hi-btn").addEventListener("click", function() {
    // Update chat screen with initial message
    var chatScreen = document.querySelector(".chat-container");
    chatScreen.innerHTML += '<div class="message from-me">Hi Jake Pogi</div>';

    // Simulate Jake's reply after a delay
    setTimeout(function() {
        // Display "typing" animation
        chatScreen.innerHTML += '<div id="typing-animation" class="message from-jake"></div>';

        // Simulate Jake's reply after another delay
        setTimeout(function() {
            // Remove "typing" animation
            document.getElementById("typing-animation").remove();
            // Display Jake's actual reply
            chatScreen.innerHTML += '<div class="message from-jake">Hello accla</div>';

            // Simulate user's reply after a delay
            setTimeout(function() {
                // User's reply
                chatScreen.innerHTML += '<div class="message from-me">Lapit na 14 haha..</div>';

                // Simulate Jake's reply after another delay
                setTimeout(function() {
                    // Display "typing" animation
                    chatScreen.innerHTML += '<div id="typing-animation" class="message from-jake"></div>';
                    // Simulate Jake's reply after another delay
                    setTimeout(function() {
                        // Remove "typing" animation
                        document.getElementById("typing-animation").remove();
                        // Display Jake's actual reply
                        chatScreen.innerHTML += '<div class="message from-jake">Syet oo nga pala!!</div>';

                        // Simulate additional conversation after a delay
                        setTimeout(function() {
                            // Display additional message
                            chatScreen.innerHTML += '<div class="message from-me">Oh, hindi mo ba ako tatanungin?</div>';

                            // Simulate typing animation for Jake's next message
                            setTimeout(function() {
                                // Display "typing" animation
                                chatScreen.innerHTML += '<div id="typing-animation" class="message from-jake"></div>';

                                // Jake's reply after typing animation
                                setTimeout(function() {
                                    // Remove "typing" animation
                                    document.getElementById("typing-animation").remove();
                                    // Display Jake's actual reply
                                    chatScreen.innerHTML += '<div class="message from-jake">Uhmm.. Will you be my Valentine?</div>';
                                    // Add "Yes" and "No" buttons
                                    chatScreen.innerHTML += '<div class="response-buttons"><button id="yes-btn" class="animated-button">Yes</button><button id="no-btn" class="animated-button">No</button></div>';
                                    // Disable clicking on the "No" button
                                    document.getElementById("no-btn").addEventListener("click", function(event) {
                                        event.preventDefault();
                                        // Change the position of the button on hover
                                        document.getElementById("no-btn").style.position = "absolute";
                                        document.getElementById("no-btn").style.left = Math.random() * 200 + "px";
                                        document.getElementById("no-btn").style.top = Math.random() * 200 + "px";
                                    });
                                    // Add functionality to the "Yes" button
                                    document.getElementById("yes-btn").addEventListener("click", function() {
                                        // Open celebration page in a new tab
                                        window.open("celebration.html", "_blank");
                                    });
                                }, 3000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 2000);
        }, 1000);
    }, 1000);

    // Remove the "Say Hi" button
    document.getElementById("say-hi-btn").style.display = "none";
});
