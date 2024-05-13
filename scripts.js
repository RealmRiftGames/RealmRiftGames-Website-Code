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


        