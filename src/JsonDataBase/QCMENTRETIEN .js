const QUESTION_DATA = [
       {
          text: "Quel est le rapport entre Java et JavaScript?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web."
              },
              {
                  id: 'B',
                  text: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe."
              },
              {
                  id: 'C',
                  text: "Java est une version améliorée de JavaScript."
              },
              {
                  id: 'D',
                  text: " Java est une île, ça n'a rien à voir !"
              },
          ],
          correct: "B"
      },
      {
          text: "Laquelle de ces syntaxes est correcte?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: 'if(a != 2) {}'
              },
              {
                  id: 'B',
                  text: 'if a != 2 {}'
              },
              {
                  id: 'C',
                  text: 'if (a <> 2) { }'
              },
              {
                  id: 'D',
                  text: 'if a <> 2 { }'
              }
          ],
          correct: "A"
      },
      {
          text: "Quel attribut des noeuds de l'arbre DOM correspond à l'attribut(X)HTML class?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "class"
              },
              {
                  id: 'B',
                  text: "CLASS"
              },
              {
                  id: 'C',
                  text: "className"
              },
              {
                  id: 'D',
                  text: "kiwi"
              },
          ],
          correct: "C"
      },
      {
          text: " Dans un fichier JavaScript externe(.js), il faut:",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "entourer le code avec les balises < script > et </script >."
              },
              {
                  id: 'B',
                  text: "préciser l’encodage du fichier avec la règle @charset."
              },
              {
                  id: 'C',
                  text: "échapper les caractères spéciaux(X)HTML."
              },
              {
                  id: 'D',
                  text: "Aucune des réponses précédentes."
              }
          ],
          correct: "D"
      },
      {
          text: " Lequel de ces types d'événements n'existe pas ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "blur"
              },
              {
                  id: 'B',
                  text: "load"
              },
              {
                  id: 'C',
                  text: "mouseclick"
              },
              {
                  id: 'D',
                  text: "mouseout"
              },
          ],
          correct: "C"
      },
      {
          text: "Quelle méthode n'existe pas dans le  <code>DOM </code>?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "document.getElementsByClassName"
              },
              {
                  id: 'B',
                  text: "document.getElementsByTagName"
              },
              {
                  id: 'C',
                  text: "document.getElementsByAttribute"
              },
              {
                  id: 'D',
                  text: "document.getElementById"
              }
          ],
          correct: "C"
      },
      {
          text: " Laquelle de ces propositions est un nom de variable valide en JavaScript ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "var"
              },
              {
                  id: 'B',
                  text: "NaN"
              },
              {
                  id: 'C',
                  text: "$b"
              },
              {
                  id: 'D',
                  text: "default"
              }
          ],
          correct: "C"
      },
      {
          text: " Dans une boucle, l'instruction continue permet de:",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "continuer l'exécution du code après la boucle."
              },
              {
                  id: 'B',
                  text: "passer à l'itération suivante. "
              },
              {
                  id: 'C',
                  text: " revenir au début de l'itération courante."
              },
              {
                  id: 'D',
                  text: "supprimer toutes les variables globales."
              }
          ],
          correct: "B"
      },
      {
          text: " var iNum = 12; iNum %= 2; A la suite de cette expression, combien vaut iNum ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "6"
              },
              {
                  id: 'B',
                  text: "14"
              },
              {
                  id: 'C',
                  text: "0.12"
              },
              {
                  id: 'D',
                  text: "0"
              }
          ],
          correct: "D"
      },
      {
          text: "Quelle méthode permet de comparer deux chaînes texte ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "charAt()"
              },
              {
                  id: 'B',
                  text: "charCodeAt()"
              },
              {
                  id: 'C',
                  text: "indexOf()"
              },
              {
                  id: 'D',
                  text: "localeCompare()"
              }
          ],
          correct: "D"
      },
      {
          text: "Quand l'événement 'load' se déclenche-t-il pour une page?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "Dès que le navigateur commence à recevoir le code HTML."
              },
              {
                  id: 'B',
                  text: "Quand le code HTML a fini d'être chargé."
              },
              {
                  id: 'C',
                  text: "Quand l'arbre DOM a été construit."
              },
              {
                  id: 'D',
                  text: "Quand l'arbre DOM a été construit et toutes les ressources chargées (images, ...)."
              }
          ],
          correct: "D"
      },
      {
          text: 'for (; ;) { ... } Que se passe - t - il avec cette instruction ?',
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: " C'est une boucle infinie qu'on peut arrêter avec une condition."
              },
              {
                  id: 'B',
                  text: "On obtient la valeur undefined"
              },
              {
                  id: 'C',
                  text: " On obtient la valeur null"
              },
              {
                  id: 'D',
                  text: "Il ne se passe rien! Mais j'ai triché pour répondre : J'ai essayé de le faire!"
              }
          ],
          correct: "A"
      },
      {
          text: " Lequel de ces codes n’affichera pas 3 ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "alert(Math.max(-4, 3));"
              },
              {
                  id: 'B',
                  text: " var i = 3; alert(i++);"
              },
              {
                  id: 'C',
                  text: "alert(parseInt('3'));"
              },
              {
                  id: 'D',
                  text: "alert(Math.floor(2.9));"
              }
          ],
          correct: " D"
      },
      {
          text: "Quel est l'équivalent de pouet.coin ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: 'pouet[coin]'
              },
              {
                  id: 'B',
                  text: ' pouet["coin"]'
              },
              {
                  id: 'C',
                  text: "pouet.getCoin()"
              },
              {
                  id: 'D',
                  text: "Aucune des solutions précédentes."
              }
          ],
          correct: "B"
      },
      {
          text: " Quelle est la méthode spécifiée dans le DOM - 2 pour l'ajout des gestionnaires d'événements ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "addEventListener"
              },
              {
                  id: 'B',
                  text: "attachEvent"
              },
              {
                  id: 'C',
                  text: "attachEventListener"
              },
              {
                  id: 'D',
                  text: "listen"
              }
          ],
          correct: "A"
      },
      {
          text: " Quel est le résultat de parseInt('010', 8) ?",
          Hint: ['Vous pouvez utlisez le console de votre navigateur'],
          choices: [
              {
                  id: 'A',
                  text: "1"
              },
              {
                  id: 'B',
                  text: "2"
              },
              {
                  id: 'C',
                  text: "8"
              },
              {
                  id: 'D',
                  text: "10"
              }
          ],
          correct: "C"
      },
      {
          text: "Quel est le doctype d'un document HTML5 ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "< !DOCTYPE html5 >"
              },
              {
                  id: 'B',
                  text: "< !DOCTYPE html >"
              },
              {
                  id: 'C',
                  text: '< !DOCTYPE html PUBLIC "-//W3C//DTD HTML5.0 Strict//EN" >'
              },
              {
                  id: 'D',
                  text: '<html5>'
              }
          ],
          correct: 'B'
      },
      {
          text: "Que signifie CSS ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "Cascading Style Sheets"
              },
              {
                  id: 'B',
                  text: "Create Simple Samples"
              },
              {
                  id: 'C',
                  text: "Choucroute et Saucisses d'Alsace"
              },
              {
                  id: 'D',
                  text: "Style Cascading Sheets"
              }
          ],
          correct: "A",
      },
      {
          text: " A quoi sert le langage CSS ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "A réaliser des pages dynamiques"
              },
              {
                  id: 'B',
                  text: "A ajouter du style aux documents web"
              },
              {
                  id: 'C',
                  text: "A insérer du contenu dans une page internet"
              },
              {
                  id: 'D',
                  text: "A assurer la qualité du code javascript"
              }
          ],
          correct: "B"
      },
      {
          text: "Où est - il conseillé de placer le code CSS ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "Dans le < body >"
              },
              {
                  id: 'B',
                  text: "Entre les balises < head >, c'est bien plus propre"
              },
              {
                  id: 'C',
                  text: "Dans un fichier externe utilisable pour plusieurs pages"
              },
              {
                  id: 'D',
                  text: "Dans google drive"
              }
          ],
          correct: "C"
      },
      {
          text: " Dans quoi définit - on les déclarations CSS ?",
          Hint: [''],
          choices: [
              {
                  id: 'A',
                  text: "Entre deux crochets sépareés par des tirets[ ... - ... ]"
              },
              {
                  id: 'B',
                  text: 'Entre deux guillemets séparées par des slashs " ... / ... "'
              },
              {
                  id: 'C',
                  text: "Entre deux accolades séparés par des points - virgules {...; ... }"
              },
              {
                  id: 'D',
                  text: "Aucune des solutions précédentes"
              }
          ],
          correct: "C"
      },
    {
        text: `Quel code permettra d'avoir des liens rouges au survol par la souris, même si ces liens ont déjà été visités ? \n`,
        Hint:
            ['Proposition 1 :    ',
                'a: hover { color: orange; } ',
                'a: visited { color: red; } ',
                'a { color: green; }',
                '---',
                'Proposition 2 :',
                'a: hover { color: red; }',
                'a: visited { color: orange; }',
                '---',
                'Proposition 3 :',
                'a: visited { color: orange; }',
                'a: hover { color: red; }',
                'a { color: green; }',
                '---',
                'Proposition 4 :',
                'a: visited { color: orange; }',
                'a: hover { color: red; }']

        ,
        choices: [
            {
                id: 'A',
                text: "Les propositions 3 et 4."
            },
            {
                id: 'B',
                text: "Les propositions 1 et 2."
            },
            {
                id: 'C',
                text: "Les propositions 3 et 2."
            },
            {
                id: 'D',
                text: "Les propositions 1 et 4."
            }
        ],
        correct: "A"
    }
]


export default QUESTION_DATA;