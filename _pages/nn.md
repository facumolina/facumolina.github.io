---
title: "Data Structure Object Classification with Neural Networks"
permalink: /research/invariants-neuralnetworks/
author_profile: true
---

During the last years, software specification has been playing a central role in various stages of software development, such as requirements engineering, software verification and maintenance. In the context of program analysis, there is an increasing availability of powerful techniques, including test generation, fault localization and program fixing for which the need for program specifications becomes crucial. 

<div style="text-align: center">
	<img src="{{ site.url }}{{ site.baseurl }}/images/proj-nn-intro.png" width="51%">
</div>

This project attempts to tackle the lack of software specifications by using machine learning models to approximate the behaviour of class invariants, a particular kind of specifications. Specifically, machine learning models are used to learn to classify valid and invalid data structure objects, as a class invariant does. A technique based on building and training a neural network to identify valid and invalid instances of a data structure was developed. The obtained classifier can then be used in place of the data structure’s invariant, in order to attempt to identify (in)correct behaviors in programs manipulating the structure. 

<div style="text-align: center">
	<img src="{{ site.url }}{{ site.baseurl }}/images/proj-nn-overview.png" width="81%">
</div>

So far, we have published the paper [Training Binary Classifiers as Data Structure Invariants](https://ieeexplore.ieee.org/document/8811951) at the International Conference on Software Engineering 2019. For further details you can inspect the paper [replication package](https://sites.google.com/site/learninginvariants).

