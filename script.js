// Funkcja oceniająca
function ocen(liczbaGwiazdek) {
    // Zaznacz gwiazdki do oceny
    var gwiazdki = document.querySelectorAll(".gwiazdka");
    gwiazdki.forEach(function(gwiazdka, index) {
        if (index < liczbaGwiazdek) {
            gwiazdka.style.fontSize = "30px";
            gwiazdka.style.color = "gold";
        } else {
            gwiazdka.style.fontSize = "30px";
            gwiazdka.style.color = "black";
        }
    });
}

// Funkcja zamykająca okno opinii
function zamknijOknoOpinii() {
    var oknoOpinii = document.getElementById("oknoOpinii");
    if (oknoOpinii) {
        oknoOpinii.remove();
    }
}

// Funkcja przesyłająca opinię
function przeslijOpinie() {
    var tekstOpinii = document.getElementById("tekstOpinii").value;
    var gwiazdki = document.querySelectorAll(".gwiazdka");
    var ocena = 0;
    gwiazdki.forEach(function(gwiazdka, index) {
        if (gwiazdka.style.color === "gold") {
            ocena = index + 1;
        }
    });

    // Sprawdź, czy pole nie jest puste
    if (tekstOpinii.trim() === "") {
        alert("Pole nie może być puste!");
        return;
    }


    // Wyświetl komunikat o przesłaniu opinii
    alert("Przesłano opinię z oceną: " + ocena + " gwiazdek");

    // Zamknij okno opinii po przesłaniu
    zamknijOknoOpinii();
}

// Funkcja otwierająca okno opinii
function otworzOknoOpinii() {
    var oknoOpinii = document.createElement("div");
    oknoOpinii.id = "oknoOpinii";
    oknoOpinii.innerHTML = `
        <div id="tloOknaOpinii">
            <h2>Oceń nas!</h2>
            <p>Wybierz liczbę gwiazdek:</p>
            <div id="gwiazdki">
                <span onclick="ocen(1)" class="gwiazdka">&#9733;</span>
                <span onclick="ocen(2)" class="gwiazdka">&#9733;</span>
                <span onclick="ocen(3)" class="gwiazdka">&#9733;</span>
                <span onclick="ocen(4)" class="gwiazdka">&#9733;</span>
                <span onclick="ocen(5)" class="gwiazdka">&#9733;</span>
            </div>
            <textarea placeholder="Napisz swoją opinię..." id="tekstOpinii"></textarea>
            <button onclick="zamknijOknoOpinii()">Zamknij</button>
            <button onclick="przeslijOpinie()">Prześlij</button>
        </div>
    `;

    document.body.appendChild(oknoOpinii);

    // Ustawienie okna opinii na środku strony
    var srodekOknaOpinii = document.getElementById("oknoOpinii");
    srodekOknaOpinii.style.position = "fixed";
    srodekOknaOpinii.style.top = "50%";
    srodekOknaOpinii.style.left = "50%";
    srodekOknaOpinii.style.transform = "translate(-50%, -50%)";

    // Dodaj stylowanie tła okna opinii
    var tloOknaOpinii = document.getElementById("tloOknaOpinii");
    tloOknaOpinii.style.backgroundColor = "grey";
    tloOknaOpinii.style.padding = "20px";
    tloOknaOpinii.style.borderRadius = "10px";
}

ocen(5);
