---
title: "Generating Specifications with Evolutionary Computation"
permalink: /research/specs-evolutionarycomputation/
author_profile: true
---

Many software validation and verification activities require a description of the software under analysis, since many analyses typically consist in checking compliance of the software against some prescribed intended behavior. Formal specifications have gained an important relevance in such contexts, mainly due to their unambiguous interpretation and the increasing availability of technologies for their automated analysis, which are making them part of effective software
analysis approaches.


In this context, this project focuses on the use of evolutionary computation in two particular tasks. On the one side, a technique based on [genetic algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm) was implemented to search for declarative specifications (in relational logic) equivalent to provided operational ones. On the other side, this kind of algorihtms were also used to search for formulas (in temporal logic) that capture obstacles in formal requirements specifications.

<div style="text-align: center">
	<img src="{{ site.url }}{{ site.baseurl }}/images/gaspecs.png" width="70%">
	<figcaption>Relational properties</figcaption>
</div>

<div style="text-align: center">
	<img src="{{ site.url }}{{ site.baseurl }}/images/proj-gatemporallogic.png" width="70%">
	<figcaption>Temporal properties</figcaption>
</div>

So far, the following papers have been published:

* [An evolutionary approach to translating operational specifications into declarative specifications](https://linkinghub.elsevier.com/retrieve/pii/S0167642319300735), Science of Computer Programming, 2019. [Replication package](https://sites.google.com/view/alloy-learning).

* [A genetic algorithm for goal-conflict identification](https://dl.acm.org/doi/10.1145/3238147.3238220), Automated Software Engineering, 2018. [Replication package](https://sites.google.com/site/learninggoalconflicts/).

* [An Evolutionary Approach to Translate Operational Specifications into Declarative Specifications](https://link.springer.com/chapter/10.1007%2F978-3-319-49815-7_9)
