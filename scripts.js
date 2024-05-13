var trainingCount = 1;
    
        function updateTrainingOptions(categoryDropdown) {
            var trainingDropdown = categoryDropdown.parentElement.querySelector("select[name^='training']");
            var tierDropdown = categoryDropdown.parentElement.querySelector("select[name^='tier']");
            var selectedCategory = categoryDropdown.value;
            var trainingOptions;
            var tierOptions;
    
            // Clear existing options
            trainingDropdown.innerHTML = '<option value="">-- Select Training --</option>';
            tierDropdown.innerHTML = '<option value="">-- Select Tier --</option>';
    
            // Set training options and tier options based on selected category
            switch (selectedCategory) {
                case 'social':
                    trainingOptions = ['Art of Negotiation', 'Cooking', 'Crafty', 'Eavesdropping', 'Embroidery', 'Enchanting Smile', 'Fabricate Information', 'Fishing', 'Foraging', 'Honorable Etiquette', 'Linguistics', 'Reading Emotions', 'Veil of Disguise', 'Art of Sushi'];
                    tierOptions = ['1', '2'];
                    break;
                case 'combat':
                    trainingOptions = ['Alchemy', 'Ambush Tactics', 'Bursting Fist Style', 'Bushcraft', 'Combat Healing', 'Disarm', 'Four Step Knot', 'Grappler', 'Improvisation', 'Iron Wall Style', 'Long Range Defense', 'Opportunity Attack', 'Safe Fall', 'Scouting', 'Tracking', 'Trapping', 'Way of Double Steel', 'Way of the Fist', 'Way of the Ninja'];
                    tierOptions = ['1'];
                    break;
                case 'weapon':
                    trainingOptions = ['Bo Staff', 'Boken', 'Flail', 'Flintlock Pistol', 'Hankyu', 'Jitte', 'Kama', 'Kanabo', 'Katana', 'Komainu Claws', 'Kusarigama', 'Kyoketsu-shoge', 'Longsword', 'Masakari', 'Naginata', 'Nunchaku', 'Odachi', 'Ono Axe', 'Scimitar', 'Short Spear', 'Shortsword', 'Spear', 'Tanto', 'Tanegashima', 'Teppo', 'Tessen', 'Wakizashi', 'Yari', 'Yumi'];
                    tierOptions = ['1', '2', '3'];
                    break;
                default:
                    trainingOptions = [];
                    tierOptions = [];
                    break;
            }
    
            // Add options to training dropdown
            trainingOptions.forEach(function(option) {
                var newOption = document.createElement('option');
                newOption.value = option.toLowerCase().replace(/\s/g, '-');
                newOption.textContent = option;
                trainingDropdown.appendChild(newOption);
            });
    
            // Add options to tier dropdown
            tierOptions.forEach(function(option) {
                var newOption = document.createElement('option');
                newOption.value = option;
                newOption.textContent = option;
                tierDropdown.appendChild(newOption);
            });
        }
    
        function addTraining() {
            trainingCount++;
            var container = document.getElementById("training-container");
            var newTrainingInput = document.createElement("div");
            newTrainingInput.className = "training-input";
            newTrainingInput.innerHTML = '<label for="category' + trainingCount + '">Category:</label>' +
                '<select id="category' + trainingCount + '" name="category' + trainingCount + '" onchange="updateTrainingOptions(this)">' +
                '<option value="">-- Select Category --</option>' +
                '<option value="social">Social</option>' +
                '<option value="combat">Combat</option>' +
                '<option value="weapon">Weapon</option>' +
                '</select>' +
                '<label for="training' + trainingCount + '">Training:</label>' +
                '<select id="training' + trainingCount + '" name="training' + trainingCount + '">' +
                '<option value="">-- Select Training --</option>' +
                '</select>' +
                '<label for="tier' + trainingCount + '">Tier:</label>' +
                '<select id="tier' + trainingCount + '" name="tier' + trainingCount + '" style="margin-right: 10px;">' +
                '<option value="">-- Select Tier --</option>' +
                '</select>';
            container.appendChild(newTrainingInput);
        }
    
        function deleteTraining() {
            if (trainingCount > 1) {
                var container = document.getElementById("training-container");
                container.removeChild(container.lastElementChild);
                trainingCount--;
            }
        }

function finalizeCharacter() {
    // Get all input elements
    var inputElements = document.querySelectorAll("input, select, textarea");

    // Iterate over each input element
    inputElements.forEach(function(inputElement) {
        // Check if the element is a checkbox
        if (inputElement.type === "checkbox") {
            // Check if the checkbox is checked
            if (inputElement.checked) {
                // Replace the checkbox with a checkmark icon
                var checkmarkIcon = document.createElement("span");
                checkmarkIcon.innerHTML = "&#10003;"; // Unicode for checkmark symbol
                inputElement.parentNode.replaceChild(checkmarkIcon, inputElement);
            } else {
                // Remove the parent container if unchecked (this will remove the whole line)
                inputElement.parentElement.remove();
            }
        } else {
            // Create a new text element
            var textElement = document.createElement("span");
            // Set the text content to the value of the input element
            textElement.textContent = inputElement.value;
            // Replace the input element with the text element
            inputElement.parentNode.replaceChild(textElement, inputElement);
        }
    });

    // Hide the "Finalize" button
    var finalizeButton = document.querySelector("button");
    finalizeButton.style.display = "none";
}
        // Define descriptions for each option
        var descriptions = {
            // Background Descriptions
            "cartographer": "Cartographers are skilled in map-making and navigation.",
            "exile": "Exiles have been banished from their homeland.",
            "foreigner": "Foreigners are from distant lands and may have unique customs.",
            "geisha": "Geishas are trained entertainers skilled in various arts.",
            "healer": "Healers specialize in the mending of wounds and illnesses.",
            "komuso-monk": "Komuso Monks are wandering musicians and practitioners of Zen Buddhism.",
            "merchant": "Merchants engage in trade and may have connections across the land.",
            "monk": "Monks are disciplined warriors trained in martial arts and spiritual pursuits.",
            "oniwaban": "Oniwabans are secret agents and spies.",
            "peasant": "Peasants come from humble origins and may possess unique skills.",
            "pirate": "Pirates are seafaring outlaws who roam the seas in search of treasure.",
            "ronin": "Ronin are masterless samurai, often wandering the land in search of purpose.",
            "sailor": "Sailors are experienced seafarers who navigate the oceans.",
            "samurai": "Samurai are noble warriors who follow the Bushido code.",
            "shinobi": "Shinobi are stealthy assassins and spies.",
            "soldier-knight": "Soldier Knights are heavily armored warriors sworn to protect their lord.",
            "sumo-wrestler": "Sumo Wrestlers are powerful fighters known for their strength and skill.",
            "tea-ceremony-master": "Tea Ceremony Masters are experts in the art of tea and etiquette.",
            "thief": "Thieves are skilled in stealth and sleight of hand.",
            "vassal": "Vassals are loyal servants and retainers to a lord or noble family.",
            // Lineage Descriptions
            "aedoha": "The Aedoha lineage is known for their prowess in archery and horseback riding.",
            "frotheim": "The Frotheim lineage is renowned for their mastery of frost magic.",
            "sensoji": "The Sensoji lineage is respected for their dedication to honor and tradition.",
            "shenmi-isles": "The Shenmi Isles are shrouded in mystery, with inhabitants possessing unique powers.",
            "suryadesh": "The Suryadesh lineage hails from a distant desert kingdom, known for their resilience.",
            "valoria": "The Valoria lineage is famous for their skilled swordsmanship and valor in battle.",
            "zamundara": "The Zamundara lineage is known for their connection to the spirit world and mystical abilities.",
            // Clan Descriptions
            "muji": "The Muji clan is known for their expertise in agriculture and herbal medicine.",
            "nami": "The Nami clan are skilled sailors and fishermen, with a deep connection to the sea.",
            "shinta": "The Shinta clan is respected for their mastery of martial arts and combat techniques.",
            "susu": "The Susu clan is known for their wisdom and scholarly pursuits.",
            "tani": "The Tani clan are expert hunters and trackers, skilled in navigating the wilderness.",
            "tetsu": "The Tetsu clan is famous for their craftsmanship in metalworking and armor smithing.",
            "yama": "The Yama clan are mountain-dwellers, known for their resilience and endurance.",
            // Birth Sign Descriptions
            "foxsquirrel": "People born under the Foxsquirrel Mutsuki are known for their agility and quick reflexes.",
            "hawk": "People born under the Hawk Kisaragi possess keen eyesight and are often skilled hunters.",
            "moth": "People born under the Moth Yayoi are drawn to the light and possess a gentle demeanor.",
            "snake": "People born under the Snake Uzuki are often cunning and possess the ability to shed old skin.",
            "spider": "People born under the Spider Satsuki are skilled weavers and possess a sharp intellect.",
            "boar": "People born under the Boar Minazuki are strong-willed and fiercely independent.",
            "crane": "People born under the Crane Fumizuki are graceful and possess a strong sense of justice.",
            "turtle": "People born under the Turtle Hazuki are patient and resilient, with a strong shell to protect them.",
            "twin-owls": "People born under the Twin Owls Nagatsuki possess keen intuition and are often seen as wise.",
            "koi-fish": "People born under the Koi Fish Kannazuki are determined and capable of overcoming obstacles.",
            "tanuki": "People born under the Tanuki Shimotsuki are known for their mischievous nature and shapeshifting abilities.",
            "monkey": "People born under the Monkey Shiwasu are playful and possess a clever mind.",
        };

        // Function to show description based on selected option
        function showDescription(selectElement) {
            // Get the selected option
            var selectedOption = selectElement.value;
            // Get the description div associated with this dropdown
            var descriptionDiv = selectElement.parentElement.querySelector(".description");
            // Set the description text based on the selected option
            descriptionDiv.textContent = descriptions[selectedOption];
        }

        // Function to generate character
        function generateCharacter() {
            // Your generate character logic goes here
            alert("Character generated!");
        }

        // Function to reset form
        function resetForm() {
            // Reset all input fields
            document.getElementById("name").value = "";
            document.getElementById("level").value = "1";
            document.getElementById("background").selectedIndex = 0;
            document.getElementById("lineage").selectedIndex = 0;
            document.getElementById("clan").selectedIndex = 0;
            document.getElementById("birth-sign").selectedIndex = 0;
            document.getElementById("ambition").value = "";
            document.getElementById("skill").value = "0";
            document.getElementById("courage").value = "0";
            document.getElementById("focus").value = "0";
            document.getElementById("vigilance").value = "0";

            // Reset description divs
            var descriptionDivs = document.querySelectorAll(".description");
            descriptionDivs.forEach(function(div) {
                div.textContent = "";
            });

            alert("Form reset!");
        }
