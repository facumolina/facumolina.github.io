---
permalink: /
---

I work at the [IMDEA Software Institute](https://software.imdea.org/) as a **Postdoctoral Researcher**, under the supervision of [Alessandra Gorla](https://software.imdea.org/~alessandra.gorla/). My main research interests are in the area of Software Testing and Analysis, with the goal of improving software reliability and quality.

In April 2022, I received my Ph.D. at [FAMAF](https://www.famaf.unc.edu.ar/), University of Córdoba (UNC), where I was advised by Professor [Nazareno Aguirre](https://dc.exa.unrc.edu.ar/staff/naguirre). My research focused on the **automated generation of test oracles**, in the form of class invariants and postconditions. Particularly, my work involved the use of search-based and learning-based techniques with the goal of obtaining precise oracles. My dissertation is available in the UNC [digital repository](https://rdu.unc.edu.ar/handle/11086/26692).

## Projects

<table style="border-collapse: collapse; border: none; font-size:100%">
	<tr style="border: none;">
		<td style="width:30%; border: none;">
			<div class="card-img" style="text-align: left;">
				<img src="{{ site.url }}{{ site.baseurl }}/images/specfuzzer-pic.png">
			</div>
		</td>
		<td align="justify" style="border: none"><a href="https://github.com/facumolina/specfuzzer">SpecFuzzer</a> is a tool that automatically infers test oracles in the form of class specifications (postconditions, invariants). SpecFuzzer uses a fuzzer as a generator of candidate assertions derived from a grammar that is automatically obtained from the class definition; a dynamic invariant detector –Daikon– to filter out assertions invalidated by a test suite; and a mutation-based mechanism to cluster and rank assertions, so that similar constraints are grouped and then the stronger prioritized.
		</td>
	</tr>
	<tr style="border: none;">
		<td style="width:30%; border: none;">
			<div class="card-img" style="text-align: left;">
				<img src="{{ site.url }}{{ site.baseurl }}/images/evospex-pic.png">
			</div>
		</td>
		<td align="justify" style="border: none;">Software reliability analyses requires a specification of the intended behavior of the software under analysis. Unfortunately, software many times lacks such specifications, or only provides them for scenario-specific behaviors. This issue seriously diminishes the analyzability of software with respect to its reliability. <a href="https://github.com/facumolina/evospex">EvoSpex</a> is a tool that, given a Java method, uses an evolutionary algorithm to produce a specification of the method's current behavior, in the form of postcondition assertions.</td>
	</tr>
	<tr style="border: none;">
		<td style="width:30%; height: 30%; border: none;">
			<div class="card-img" style="text-align: left;">
				<img src="{{ site.url }}{{ site.baseurl }}/images/nn-proj-all-2.png">
			</div>
		</td>
		<td align="justify" style="border: none;">As expressing class specifications, such as class invariants, can be a very challenging task, and they are often absent accompanying code, in the <a href="https://sites.google.com/site/learninginvariants">Training Binary Classifiers as Data Structures Invariants</a> project we explore the use of artificial neural networks (binary classifiers) as class invariants of data structure implementations, i.e., we train these models to learn to distinguish valid/invalid instances of data structures. The obtained classifier can then be used in order to attempt to identify (in)correct behaviors in programs manipulating the class.</td>
	</tr>
</table>

## Publications
This is a list of my latest/most relevant publications. The full list can be found in my <a href="https://dblp.org/pid/189/6361.html">dblp</a> or <a href="https://scholar.google.com/citations?user=_8J_7doAAAAJ">google scholar</a>. 

<p><a name="fase2023"></a>

<b>Efficient bounded exhaustive input generation from program APIs</b> by Mariano Politano, Valeria Bengolea, Facundo Molina, Nazareno Aguirre, Marcelo Frias, and Pablo Ponzio. To appear in <em>Fundamental Approaches to Software Engineering - 26th International Conference, FASE 2023, Held as Part of the European Joint Conferences on Theory and Practice of Software, ETAPS 2023, Paris, France, April 22-27</em>, 2023.
[&nbsp;<a href="https://zenodo.org/record/7508833">code</a>&nbsp;|
<a href="https://link.springer.com/chapter/10.1007/978-3-031-30826-0_6">https</a>&nbsp;|
<a href="https://nmaguirre.github.io/assets/pdf/fase2023b.pdf">.pdf</a>&nbsp;]
</p>

<p><a name="DBLP:conf/issre/Molina22"></a>

<b>Learning to prune infeasible paths in generalized symbolic execution</b> by Facundo Molina, Pablo Ponzio, Nazareno Aguirre, and Marcelo&nbsp;F. Frias. In <em>33rd IEEE International Symposium on Software
  Reliability Engineering, ISSRE 2022, Charlotte, NC, USA, October
  31-November 3, 2022</em>, 2022.
[&nbsp;<a href="https://sites.google.com/view/learning-symbolic-invariants">code</a>&nbsp;|
<a href="https://ieeexplore.ieee.org/document/9978961">https</a>&nbsp;|
<a href="https://facumolina.github.io/files/Molina_ETAL_ISSRE2022.pdf">.pdf</a>&nbsp;]
</p>

<p><a name="DBLP:conf/icse/MolinadA22"></a>

<b>Fuzzing class specifications</b> by Facundo Molina, Marcelo d'Amorim, and Nazareno Aguirre.
 In <em>44th IEEE/ACM 44th International Conference on Software
  Engineering, ICSE 2022, Pittsburgh, PA, USA, May 25-27, 2022</em>, pages
  1008&ndash;1020. ACM, 2022.
[&nbsp;<a href="https://sites.google.com/view/specfuzzer">code</a>&nbsp;|
<a href="https://youtu.be/c2SxRBfofvM">media</a>&nbsp;|
<a href="https://doi.org/10.1145/3510003.3510120">https</a>&nbsp;|
<a href="https://www.cin.ufpe.br/~damorim/publications/Molina_ETAL_ICSE2022.pdf">.pdf</a>&nbsp;]

</p>

<p><a name="DBLP:conf/icse/MolinaPAF21"></a>

 <b>Evospex: An evolutionary algorithm for learning postconditions</b> by Facundo Molina, Pablo Ponzio, Nazareno Aguirre, and Marcelo&nbsp;F. Frias.
 In <em>43rd IEEE/ACM International Conference on Software
  Engineering, ICSE 2021, Madrid, Spain, 22-30 May 2021</em>, pages 1223&ndash;1235.
  IEEE, 2021.
[&nbsp;<a href="https://sites.google.com/view/evospex">code</a>&nbsp;|
<a href="https://youtu.be/PuFML86C1SA">media</a>&nbsp;|
<a href="https://doi.org/10.1109/ICSE43902.2021.00112">https</a>&nbsp;|
<a href="https://facumolina.github.io/files/evospex-icse2021.pdf">.pdf</a>&nbsp;]

</p>

<p><a name="DBLP:conf/icse/MolinaDPRAF19"></a>


 <b>Training binary classifiers as data structure invariants</b> by Facundo Molina, Renzo Degiovanni, Pablo Ponzio, Germ&aacute;n Regis, Nazareno
  Aguirre, and Marcelo&nbsp;F. Frias. In <em> Proceedings of the 41st International Conference on Software Engineering, ICSE 2019, Montreal, QC, Canada, May 25-31, 2019</em>, pages 759&ndash;770. IEEE / ACM, 2019.
[&nbsp;<a href="https://sites.google.com/site/learninginvariants">code</a>&nbsp;|
<a href="https://doi.org/10.1109/ICSE.2019.00084">https</a>&nbsp;|
<a href="https://dc.exa.unrc.edu.ar/staff/naguirre/papers/icse2019.pdf">.pdf</a>&nbsp;]

</p>

## Research Team

**Researchers**
* [Alessandra Gorla](https://software.imdea.org/~alessandra.gorla/) (IMDEA, Spain - current supervisor)
* [Nazareno Aguirre](https://dc.exa.unrc.edu.ar/staff/naguirre) (UNRC, Argentina - former PhD advisor)
* [Renzo Degiovanni](https://rdegiovanni.github.io/) (SnT, Luxembourg)
* [Marcelo d'Amorim](https://damorim.github.io/) (NCSU, USA)
* Pablo Ponzio (UNRC, Argentina)
<br>

**PhD students**
* [Juan Manuel Copia](https://www.linkedin.com/in/juancopia/) (IMDEA, Spain - collaborator)
<br>

**Undergraduate Students**
* [Agustín Nolasco](https://agusnolasco.github.io/) (UNRC, Argentina): working on metamorphic testing.
* [Claudio Dosantos](https://ar.linkedin.com/in/claudio-dosantos) (UNRC, Argentina): working on oracle effectiveness.

## Service

* [SCAM 2023](http://www.ieee-scam.org/2023/) Program Committee
* [ISSTA 2023 Artifact Evaluation Committee](https://conf.researchr.org/track/issta-2023/issta-2023-artifact-evaluation)
* [SAS 2023 Artifact Evaluation Committee](https://conf.researchr.org/track/sas-2023/sas-2023-sas-2023-artifacts)
* [TORACLE 2021](https://toracle2021.github.io/) Program Committee

## Funding

I am very thankful to have received funding from [CONICET](https://www.conicet.gov.ar/) and Microsoft Research to support my research.
