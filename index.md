---
layout: default
title: Home
id: home
style: hero
---

# Structure d'une page HTML

## Quelques balises utiles

{% highlight html %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="nom" content="valeur">
    <title>Titre de la page</title>
</head>
{% endhighlight %}

| Balises       | Description  |
|:------------- |:-------------|
| `<body></body>` | corps de la page |
| `<h1></h1>` | titre 1 |
| `<h2></h2>` | titre 2 |
| `<p></p>` | paragraphe |
| `<footer></footer>` | pied de page |
| `</html>` | ferme le fichier html |


## Exercice 1

En comparant la page sur plusieurs navigateurs, on peut observer qu’elles sont identiques du point de vue de la mise en page. Seule la police ou la taille du texte varie, ces dernières étant les propriétés par défaut du navigateur (étant donné que l’on n’a pas de fichier css, le navigateur prendra une police par défaut).


## Exercice 2

Nous pouvons voir dans ce fichier (erreurs.html) plusieurs erreurs que l’on pourrait commettre lorsque l’on débute ou que l’on est pas assez concentré.


# Liens et navigation dans les pages

## Quelques éléments utiles

| Éléments / attributs | Description  |
|:------------- |:-------------|
| `<a href="lien"></a>` | Crée un lien vers _lien1_ |
| `target="_blank"` | Cet attribut à insérer dans une balise `<a>` permet lors du clic sur le lien de le renvoyer dans un nouvel onglet, une nouvelle page |
