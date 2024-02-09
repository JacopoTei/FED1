$(document).ready(function() {
  var articlesByCategory = {
    politica: [
      { title: "Titolo articolo politica 1", content: "Contenuto articolo politica 1", image: "https://picsum.photos/150/150?grayscale" },
      { title: "Titolo articolo politica 2", content: "Contenuto articolo politica 2", image: "https://picsum.photos/151/150?grayscale"}
    ],
    sport: [
      { title: "Titolo articolo sport 1", content: "Contenuto articolo sport 1", image: "https://picsum.photos/152/150?grayscale" },
      { title: "Titolo articolo sport 2", content: "Contenuto articolo sport 2", image: "https://picsum.photos/153/150?grayscale" }
    ],
    cultura: [
      { title: "Titolo articolo cultura 1", content: "Contenuto articolo cultura 1", image: "https://picsum.photos/154/150?grayscale" },
      { title: "Titolo articolo cultura 2", content: "Contenuto articolo cultura 2", image: "https://picsum.photos/155/150?grayscale" }
    ]
  };

  function showArticles(category) {
    var articles = articlesByCategory[category];
    var html = "";
    if (articles) {
      articles.forEach(function(article) {
        html += `
        <div class="col-12 col-md-6 col-lg-4 mb-3"> <!-- Aggiungi classe col per disporre le card orizzontalmente -->
        <div class="card shadow-lg" style="width: 18rem;">
          <img src="${article.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <small class="fnt1">IL GIORNALE</small>
            <hr>
            <h5 class="card-title fnt2">${article.title}</h5>
            <p class="card-text fnt2">${article.content}</p>
          </div>
        </div>
      </div>`;
      });
    } else {
      html = "<p>Nessun articolo trovato per questa categoria.</p>";
    }
    $("#mainArticles").html(html);
  }

  // Inizializzazione: mostra gli articoli di politica per impostazione predefinita
  showArticles("politica");

  // Aggiungi gestore eventi per il click sulle categorie
  $("#categoryList a").click(function(e) {
    e.preventDefault();
    var category = $(this).data("category");
    showArticles(category);
  });
});
