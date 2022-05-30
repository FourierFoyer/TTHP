var xresources = new Vue({
  el: '#xresources',
  data: {
    sections: [

      // Section Tabletop Roleplaying Theory
      {
        name: "Tabletop Roleplaying Theory",
        description: `
          Sources that are related to theories on the design, build, and play of
          tabletop roleplaying games.
        `,
		entries: [
          {
            sourceid: 'indie-rpgs',
            name: 'The Forge',
            link: 'http://www.indie-rpgs.com/',
            description: `
              A forum for discussing
              <a class="wiki_link" href="Glossary.html#roleplaying%20game">
                RPG
              </a>
              theory. The main moderator is Ron Edwards, who has spent a lot of time
              studying the
              <a class="wiki_link" href="Glossary#roleplaying%20game">
                roleplaying game
              </a>
              industry. An enormous amount of insight can be drawn from the website
              by studying the theory texts.
            `,
            subentries: [
              {
                link: 'http://indie-rpgs.com/_articles/glossary.html',
                linktext: 'The Forge Glossary',
                description: `
                  a.k.a. The Forge's Provisional Glossary - The glossary which provided
                  the inspiration for the glossary on this wiki. However, it tends to be
                  very jargon-heavy, and is difficult to understand unless you're
                  familiar with the Big Model.
                `
              },
              {
                link: 'http://en.wikipedia.org/wiki/The_Big_Model',
                linktext: 'The Big Model',
                description: `
                  To quote Wikipedia, the Big Model is a body of
                  <a class="wiki_link_ext" href="http://en.wikipedia.org/wiki/Role-playing_game_theory">
                    role-playing game theory
                  </a>
                  developed primarily by
                  <a class="wiki_link_ext" href="http://en.wikipedia.org/wiki/Ron_Edwards_(game_designer)">
                    Ron Edwards
                  </a>
                  . It serves as a capstone and organizing principle to the amorphous
                  body of work commonly referred to as
                  <a class="wiki_link_ext" href="http://en.wikipedia.org/wiki/GNS_Theory">
                    GNS Theory
                  </a>
                  .
                `
              },
              {
                link: 'http://www.indie-rpgs.com/articles/1/',
                linktext: '"GNS and Other Matters of Role-playing Theory"',
                description: `
                  Foundational essay by Ron Edwards called
                  <a class="wiki_link_ext" href="http://www.indie-rpgs.com/articles/15/">
                    "Simulationism: The Right to Dream" by Ron Edwards
                  </a>
                  which expounds upon the
                  <a class="wiki_link" href="Glossary.html#simulationism">
                    simulationist
                  </a>
                  mode of play. Briefly, the goal of simulationism is to have the
                  immersion of oneself in the fiction of the game world take priority
                  over any interpersonal goals that may exist or arise between the
                  players.
                `
              },
              {
                link: 'http://www.indie-rpgs.com/articles/21/',
	            linktext: '"Gamism: Step On Up" by Ron Edwards',
                description: `
                  Foundation essay expounding upon the
                  <a class="wiki_link" href="Glossary.html#gamism">
                    gamist
                  </a>
                  mode of play. Briefly, gamism focuses upon healthy competition between
                  the players as opposed to cooperation against the challenges of the
                  game world.
                `
              },
              {
                link: 'http://www.indie-rpgs.com/articles/21/',
	            linktext: '"Narrativism: Story Now" by Ron Edwards',
                description: `
                  Foundational essay expounding upon the
                  <a class="wiki_link" href="Glossary.html#narrativism">
                    narrativist
                  </a>
                  mode of play. Briefly, narrativism focuses upon the resolution of
                  <a class="wiki_link" href="Glossary.html#premise">
                   Premise
                  </a>
                  through play within the game world, where Premise is a loaded term;
                  i.e. please see the
                  <a class="wiki_link" href="Glossary.html">
                    Glossary
                  </a>
                  .
                `
              },
              {
                link: 'http://www.indie-rpgs.com/archive/index.php?topic=20791.msg216100',
                linktext: '"Silent Railroading and the Intersection of Scenario Prep & Player Authorship"',
                description: `
                  A Forge post containing Ron Edwards' take on the GM.
                `
              },
              {
                link: 'http://www.indie-rpgs.com/forge/index.php?topic=32857.msg291872#msg291872',
	            linktext: '(High Fantasy) First Thoughts for a new system',
                description: `
                  A Forge post containing an idea by Ron Edwards' for tying
                  character effort to output. Good for varied resource management (per
                  Brian Gleichman's
                  <a class="wiki_link_ext" href="http://www.rpg.net/news+reviews/columns/elements01nov02.html">
                    "Elements of Tactics"
                  </a>
                  ).
                `
              },
              {
                link: 'http://www.indie-rpgs.com/forge/index.php?topic=30399.0',
	            linktext: '"Ruminations on the Impossible Dream Before Breakfast"',
                description: `
                  The Forge post where I drop the notion of attempting to incorporate
                  <a class="wiki_link" href="Glossary.html#narrativism">
                    Narrativism
                  </a>
                  in my game designs.
                `
              }
            ] // "Tabletop RP Theory section".entries[]."The Forge".subentries
          }, //"Tabletop RP Theory section".entries[]."The Forge"

          {
            sourceid: 'classicrpgrealms',
            name: 'Classic RPG Realms: The Answer to the Edition Wars: The Big Model',
            link: 'http://classicrpgrealms.blogspot.com/2011/07/answer-to-edition-wars-big-model.html',
            description: `
              A decent exposition to Ron Edward's Big Model, for those of the feint of
              heart who aren't willing to jump into the Forge yet.
            `
          }, //"Tabletop RP Theory section".entries[]."Classic RPG Realms"

          {
            sourceid: 'rpg.net',
			name: 'rpg.net',
			link: 'http://www.rpg.net/',
            description: `
              As far as I can tell, a much more widely-read forum than
              <a class="wiki_link_ext" href="http://www.indie-rpgs.com/">
                the Forge
              </a>
              . Though the posts written by the various users can occasionally be
              interesting, more often than not they veer off into the usual aimless
              internet babbling.
            `,
            subentries: [
              {
                link: 'http://www.rpg.net/columneditor/mendespinto/RQ08_t1.pdf',
                linktext: 'http://www.rpg.net/columneditor/mendespinto/RQ08_t1.pdf',
                description: `
                  "Primary Attributes in RPGs 2005" by Sergio Mascarenhas - A
                  survey of a vast array of different RPGs and their primary character
                  attributes.
                `
              },
            ]
          }, //"Tabletop RP Theory section".entries[]."rpg.net"
          {
            sourceid: 'vincentbaker',
            name: '"The Fruitful Void" by Vincent Baker from Lumpley Games',
            link: 'http://www.lumpley.com/comment.php?entry=119',
            description: `
              An article about what's really most important in
              <a class="wiki_link" href="Glossary.html#roleplaying%20game">
                RPGs
              </a>
              but hardest to understand and see. It's what the game is
              <i>really</i> about.
            `
          },
          {
            sourceid: 'matthewfinch',
            name: '"A Quick Primer for Old School Gaming" by Matthew Finch',
            link: 'http://www.lulu.com/product/file-download/quick-primer-for-old-school-gaming/3159558',
            description: `
              Supposedly a primer to get back to the heyday of D&D when gaming was
              fun and exciting, and didn't include all the little chores.
            `
          },
          {
            sourceid: 'whitsonjohnkirkiii',
            name: '"Design Patterns of Successful RPGs" by Whitson John Kirk III',
            link: 'http://www.madbrewlabs.com/wp-content/uploads/2008/08/rpg-design-patterns-9-26-05.pdf',
            description: `
              An interesting survey of the internal mechanics of existing popular
              <a class="wiki_link" href="Glossary.html#roleplaying%20game">
                RPGs
              </a>
              , reducing them to an engineer's perspective.
            `
          },
          {
            sourceid: 'oddysey',
            name: 'Social Mechanics Conversation',
            link: 'assets/files/Social Mechanics Conversation.html',
            description: `
              Random snippet from a user Oddysey/Natalie
              from a comment she made on
              <a class="wiki_link_ext" href="http://rpgdiehard.blogspot.com/">
                RPGDieHard
              </a>
              , during a conversation of Player Skill vs. Character Skill and
              the case of social encounters.
            `,
          },

        ] //"Tabletop RP Theory section".entries[]
	  }, //xresources.sections[]."Tabletop RP Theory section"

      // Section Virtual World Theory
      {
        name: "Virtual World Theory",
        description: `
          Sources about the theory of virtual world design, how people behave within
          them, and what makes them fun to play in.
        `,
        entries: [
          {
            sourceid: 'wallace',
            name: 'In Celebration of the Inner Rogue',
            link: 'https://www.escapistmagazine.com/in-celebration-of-the-inner-rogue/',
            description: `
              Magazine article by Mark Wallace, an anecdote describing Richard Bartle's
              "Hero's Journey" in action. (See above entry.)
            `,
          },
          {
            sourceid: '',
            name: 'Virtual Worlds: Why People Play',
            link: 'http://www.mud.co.uk/richard/VWWPP.pdf',
            description: `
              A fairly expansive introduction to the full document presented in
              Richard Bartle's book, discussing the various player types in
              regards to electronic virtual worlds, and peoples' progressions
              through those types. Their progression is described as a
              <a class="wiki_link" href="Glossary.html#heros journey">
                Hero's Journey
              </a>
              .
            `,
            subentries: [
              {
                link: 'http://www.mud.co.uk/richard/hcds.htm',
                linktext: 'Hearts, Clubs, Diamonds, Spades: Players Who Suit MUDs',
                description: `
                  The pre-cursor to Richard Bartle's more expansive research ("Designing Virtual
                  Worlds") on the influence of players and virtual worlds and each other, and
                  their tendencies as a group to grow or shrink considered on that basis alone.
                `
              },
              {
                link: 'http://en.wikipedia.org/wiki/Designing_Virtual_Worlds',
                linktext: 'Designing Virtual Worlds',
                description: `
                  Richard Bartle's preeminent work on the behaviours and drives of people acting
                  with and interacting within virtual worlds.
                `
              },
            ]
          }, //"Virtual World Theory section".entries[]."Virtual Worlds: Why People Play"
          {
            sourceid: 'The_Hero_With_A_Thousand_Faces',
            name: 'The_Hero_with_a_Thousand_Faces',
            link: 'https://en.wikipedia.org/wiki/The_Hero_with_a_Thousand_Faces',
            description: `
              Wikipedia entry for "The Hero With a Thousand Faces" by
              Joseph Campbell, first published in 1949. Richard Bartle's work
              depends heavily upon the ideas presented in this book.
            `,
          },
          {
            sourceid: 'wittmersinger',
            name: 'Measuring Presence in Virtual Environments: A Presence Questionnaire',
            link: 'http://depts.washington.edu/edtech/wittmer.pdf',
            description: `
              A questionnaire by Bob G. Wittmer and Michael J. Singer, evidently used to gather data
              on peoples' feelings of "presence" within a virtual environment. This link is to the
              description of the study and questionnaire, but does not include actual data from tests.
            `,
          },

        ] //"Virtual World Theory section".entries[]
	  }, //xresources.sections[]."Virtual World Theory section"

      // Section General Game Theory
      {
        name: 'General Game Theory',
        description: `
          Sources regarding general game theory.
        `,
		entries: [
          {
            sourceid: 'gleichman',
            name: 'Elements of Tactics',
            link: 'http://www.rpg.net/news+reviews/columns/elements01nov02.html',
            description: `
              A brilliant article currently residing on
              <a class="wiki_link_ext" href="http://www.rpg.net/">
                RPG.net
              </a>
              that discusses what makes for a really juicy, tactical game. Hint: it
              ain't just a matter of building a rock, paper, scissors game.
            `,
          },
          {
            sourceid: 'rosewater',
            name: 'The Value of Pie',
            link: 'http://www.wizards.com/Magic/Magazine/Article.aspx?x=mtgcom/daily/mr85',
            description: `
              An article by "Magic the Gathering" game cocreator Mark Rosewater. Although
              the article is specifically about the game's color pie, the concepts discussed
              are similar to those discussed in Brian Gleichman's
              <a class="wiki_link_ext" href="http://www.rpg.net/news+reviews/columns/elements01nov02.html">
                "Elements of Tactics"
              </a>
              and therefore apply to good strategy games in general.
            `,
          },
          {
            sourceid: 'gilbert',
            name: "Gilbert's Rules of Thumb",
            link: "assets/files/Gilbert's Rules of Thumb.html",
            description: `
              An article adapted by myself (Daniel B) originally written by Ron Gilbert: 
              <a class="wiki_link_ext" href="http://grumpygamer.com/2152210">
                http://grumpygamer.com/2152210
              </a>
              . Although the article is regarding puzzle-building for 
              single-player adventure games, the same arguments apply
              directly to tabletop and electronic RPGs, as well as other game types.
            `,
          },
          {
            sourceid: 'costikyan',
            name: 'I Have No Words & I Must Design: Toward a Critical Vocabulary for Games',
            link: 'http://www.costik.com/nowords2002.pdf',
            description: `
              An article by Greg Costikyan, where he analyzes what it means to play a
              game and how to classify games, or whether such classification is even possible.
            `,
          },
          {
            sourceid: 'businessballs.com',
            name: 'conscious competence learning model',
            link: 'http://www.businessballs.com/consciouscompetencelearningmodel.htm',
            description: `
              An article of unknown author from an unknown business magazine, found on website
              businessballs.com. It is an analysis of stages of learning. More general in
              nature than Richard Bartle's research and yet the resultant models and conclusions
              seem highly overlapping, if we consider the "Hero's Journey" to be a specific
              expression of the more general pattern of learning.
            `,
          },

        ] //"General Game Theory section".entries[]
      }, //xresources.sections[]."General Game Theory section"

      {
        name: 'LARP Game Theory',
        description: `
          Theories on live action roleplaying games (LARPs). 
        `,
		entries: [
          {
            sourceid: 'incentives-as-tools',
            name: 'Incentives as tools of larp dramaturgy',
            link: 'http://knutepunkt.laiv.org/kp05/Incentives%20as%20tools%20of%20larp%20dramaturgy..pdf',
            description: `
              Article by unknown author. To quote its own summary, "Provides an overview
              and analysis of "incentive", methods employed larpwrights to encourage
              specific player interactions during the larp - conflict, puzzles, fates,
              etc. and how they can be structured into connected "webs".
            `,
          },
          {
            sourceid: 'eagar',
            name: 'Shape_of_the_US_LARP_Hobby3.pdf',
            link: '/assets/files/Shape_of_the_US_LARP_Hobby3.pdf',
            description: `
              Article by
              <a class="wiki_link_ext" href="http://www.facebook.com/dicemistress">
                Amber Eagar
              </a>
              , a discussion of the nature of LARPs. Although the document itself
              doesn't reference tabletop RPGs much, it is enlightening to consider.
              A copy of the document is kept on the internet but it no longer
              seems to work in my copy of Acrobat Reader.
            `,
          },
        ] //"LARP Game Theory".entries[]
      }, //xresources.sections[]."LARP Game Theory"

      {
        name: 'Expired Sources',
        description: `
          The included documents were obtained from external
          sources, but for which the original links are lost
          or else the original document no longer exists online.
        `,
		entries: [
          {
            sourceid: 'edwards',
            name: 'Ron Edwards Conversation Notes',
            link: 'assets/files/Ron Edwards Conversation Notes.html',
            description: `
              Notes I generated while having a phone conversation
              with Ron Edwards of
              <a class="wiki_link_ext" href="http://indie-rpgs.com/">
                the Forge
              </a>
              . I spoke to him to learn more about the site and how
              the theories came about, and to see what he thought
              of the ideas we had so far for our own game.
            `,
          },
          {
            sourceid: 'facebook-best',
            name: 'Facebook Best Responses',
            link: 'assets/files/Facebook Best Responses.html',
            description: `
              The most interesting answers to some question
              posted on a D&D Gamer Ladies page on Facebook,
              that I gathered while researching the opposite
              sex's opinions on RPGs. The question was maybe
              "What were your most memorable D&D experiences?"
            `,
          },
          {
            sourceid: 'handtohandcombat',
            name: 'handtohandcombat.pdf',
            link: 'assets/files/handtohandcombat.pdf',
            description: `
              Real-life hand-to-hand combat training manual.
              It was originally obtained from a search on the
              internet, but I neglected to record its source.
            `,
          },
          {
            sourceid: 'handtohandcombat',
            name: 'Skill/Stat rant',
            link: 'http://www.indie-rpgs.com/archive/index.php?topic=2051.msg19604#msg19604',
            description: `
              A rant posted on
              <a class="wiki_link_ext" href="http://www.indie-rpgs.com/">
                the Forge
              </a>
              by
              <a class="wiki_link_ext" href="http://www.indie-rpgs.com/forum/index.php?action=profile;u=42">
                Mike Holmes
              </a>
             complaining about systems that contain both skills
             and attributes. Mike brings up some very good points.
            `,
          },
        ] //"Expired Sources".entries[]
      }, //xresources.sections[]."Expired Sources"

	] //xresources.sections[] 
  } //xresources.data
})

/*
      {
        name: 'Section name',
        description: `
          Sources in this section are regarding
        `,
		entries: [
          {
            sourceid: 'for css',
            name: 'Sourcename',
            link: 'http://',
            description: `
            `,
            subentries: [
              {
                link: 'http://etc',
                linktext: '',
                description: `
                  blah
                `
              },
            ]
          } //"Blah section".entries[]."specific source"
        ] //"Blah section".entries[]
      }, //xresources.sections[]."Blah section"
	  
*/