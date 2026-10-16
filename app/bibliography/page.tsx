import Layout from "@/components/ui/layout";
import { Heading } from "@/components/ui/typography";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Bibliography",
  description: "Read about published papers, books and conference abstracts",
  path: "/bibliography",
});

const bibliography: { year: number; publications: string[] }[] = [
  {
    year: 2025,
    publications: [
      'Atterholt JA, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, You H-L. 2025. Osteohistology of enantiornithine birds from the Lower Cretaceous Xiagou Formation. Geobios 90: 5-16.',
      'Bohus C, Pardo J, Mann A, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Devera J. In press. New tetrapod material, faunal assemblage, and geology of the Late Mississippian-aged red bed deposits near Goreville, Illinois. The Geological Society Special Publications.',
      'Castro-Terol J, Pérez-Ramos A, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Sanz JL, Serrano FJ. 2025. Micro-CT reconstruction reveals new information about the phylogeny and locomotion of the Early Cretaceous bird Iberomesornis romerali. Geobios 90: 17-30.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Clark AD, Kuo P-C, Kiat Y, Fabbri M, Shinya A, Van Beek C, Lu J, Wang M, Han H. 2025. Chicago Archaeopteryx informs on the early evolution of the avian bauplan. Nature.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2025. Insights into the early evolution of modern avian physiology from fossilized soft tissues from the Mesozoic. Philosophical Transactions of the Royal Society London B Biological Sciences 380: 20230426.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Atterholt JA, Bailleul AM, Wang M, Kuo P-C, Zhou Z-H. 2025. Description and osteohistology of two early immature enantiornithines (Aves: Ornithothoraces) from the Early Cretaceous Jehol Biota. Geobios 90: 103-122.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Atterholt JA, Clark AD, Zhou L-Q, Peng C, Zhang X-Q, You H-L. 2025. A new enantiornithine (Aves: Ornithothoraces) from the Lower Cretaceous Xiagou Formation with unusually short pubes. Geobios 90: 123-131.',
    ],
  },
  {
    year: 2024,
    publications: [
      'Arnold P, Janiszewska K, Li Q, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Fostowicz-Frelik L. 2024. The Late Cretaceous eutherian Zalambdalestes reveals unique axis and complex evolution of the mammalian neck. Science Bulletin 69: 1767-1775.',
      'Clark AD, Atterholt JA, Scanella JB, Carroll N, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2024. New enantiornithine diversity in the Hell Creek Formation and the functional morphology of the avisaurid tarsometatarsus. PLoS ONE 19(10): 1-25.',
      'Kiat Y, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. Functional constraints on the number and shape of flight feathers. 2024. Proceedings of the National Academy of Sciences USA. 121(e2306639121): 1-11.',
      'Liu Y-C, Ji Q, Wang X-R, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Guo B, Ren T-L, Yin T-T, Wang Y-B. 2024. Micro-XRF mapping elucidates the taphonomy of two Early Cretaceous paravian fossils from western Liaoning, China. Atomic Spectroscopy 45(2): 123-131.',
      'Loewen M, Sertich JJW, Sampson S, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Carpenter S, Sisson B, Øhlenschlæger A, Farke AA, Makovicky PJ, Longrich N, Evans DC. In press. Lokiceratops rangiformis gen. et sp. nov. (Ceratopsidae: Centrosaurinae) from the Campanian Judith River Formation of Montana reveals rapid regional radiations and extreme endemism within centrosaurine dinosaurs. PeerJ 12:e17224 1-97.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Clark AD, Herrera F, Yang X, Wang X-L, Zheng X-T, Hu H, Zhou Z-H. 2024. Direct evidence of frugivory in the Mesozoic bird Longipteryx contradicts morphological proxies for diet. Current Biology 34, 4559-4566.',
      'Shen C-Z, Clark AD, Fang H, Chen S-K, Jiang H-X, Ji Q, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2024. A new diminutive species of bohaiornithid enantiornithine (Aves: Ornithothoraces) from the Lower Cretaceous Jehol Group, northern China. Scientific Reports 14(1): 31363',
      'Wang X-L, Clark AD, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhang X-Y, Wang X, Zheng X-T, Zhou Z-H. 2024. First Edentulous Enantiornithine (Aves: Ornithothoraces) from the Early Cretaceous Jehol Avifauna. Cretaceous Research 159(105867): 1-14.',
      'Wang X-L, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zheng X-T, Wang Y, Kiat Y. 2024. Earliest evidence of primary feather moult. Biology Letters 20(20240106): 1-6.',
      'Wu Q, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang S-Y, Zhou Z-H. 2024. Transformation of the pectoral girdle in pennaraptorans: critical steps in the formation of the modern avian shoulder joint. PeerJ 12: 1-42.',
    ],
  },
  {
    year: 2023,
    publications: [
      'Clark AD, Hu H, Benson RBJ, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2023. Reconstructing the dietary habits and trophic positions of the Longipterygidae (Aves: Enantiornithes) using neontological and comparative morphological methods. PeerJ 11:1-32.',
      'Kiat Y, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2023. Rarity of molt evidence in early pennaraptoran dinosaurs suggests annual molt evolved later among Neornithes. Communications Biology 6(687): 1-4.',
      'Liu S-M, Li Z-H, Liu D, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2023. Quantifying the gastral mass in Early Cretaceous ornithuromorphs (Aves: Ornithothoraces) from the Jehol avifauna. Palaeontology, e12677: 1-17.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Kiat Y, Ma H-D, Ai T-Y, Wang L-H, Bi S-D. 2023. Immature feathers preserved in Burmite provide evidence of rapid molting in enantiornithines. Cretaceous Research, 149: 105572.',
      'Stidham T, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Li Z-H. 2023. The Pleistocene Zhoukoudian ‘Peking Man’ site records the first Beijing (China) evidence of the Northern Raven (Corvus corax). Journal of Ornithology, 165(1): 269-276.',
      'Wang Y, Li Z-H, Wang C-C, Bailleul AM, Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Li J-H, Zheng X-T, Pei R, Teng F-F, Wang X-L, Zhou Z-H. Comparative microstructural study on the teeth of Mesozoic birds and non-avian dinosaurs. Royal Society Open Science, 10(5): 230147.',
    ],
  },
  {
    year: 2022,
    publications: [
      'Fabbri M, Navalón G, Benson RBJ, Pol D, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> J, Bhullar B-A, Erickson GM, Norell MA, Orkney A, Lamanna MC, Zouhri S, Becker J, Emke A, Dal Sasso C, Bindellini G, Maganuco S, Auditore M, Ibrahim N. 2022. Subaqeuous foraging among carnivorous dinosaurs. Nature, 603:852-857.',
      'Hendrickx C, Bell PR, Ezcurra M, Cuesta E, Milner AR, Xu X, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Loewen M, Sereno PC, Mateus O. 2022. Morphology and distribution of epidermal structures (excluding feathers) in non-avian theropod dinosaurs. Biological Reviews (Cambridge), 97(3): 960-1004.',
      'Hu H, Wang Y, McDonald PG, Wroe S, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Bjarnason A, Bevitt JJ, Yin X-W, Zheng X-T, Zhou Z-H, Benson RBJ. 2022. Earliest evidence for fruit consumption and potential seed dispersal by birds. eLife, 11(74751): 1-19.',
      'Hu H, Wang Y, Fabbri M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, McDonald PG, Wroe S, Yin X-W, Zheng X-T, Zhou Z-H, Benson RBJ. 2022. Cranial osteology and palaeobiology of the Early Cretaceous bird Jeholornis prima (Aves: Jeholornithiformes). Zoological Journal of the Linnean Society, 198(1): 93-112.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Stidham TA, Harris JD, Lamanna M, Bailleul AM, Hu H, Wang M, You H-L. 2022. Avian skulls represent a diverse ornithuromorph fauna from the Lower Cretaceous Xiagou Formation, Gansu Province, China. Journal of Systematics and Evolution, 60(5): 1172-1198.',
      'Rothschild BM, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Lozada MC. 2022. Closer examination does not support infection as cause for enigmatic Tyrannosaurus rex mandibular pathologies. Cretaceous Research, 140(105353): 1-11.',
      'Wang M, Stidham TA, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H. 2022. Insight into the evolutionary assemblage of cranial kinesis from a Cretaceous bird. eLife 11:1-18.',
    ],
  },
  {
    year: 2021,
    publications: [
      'Atterholt JA, Poust AW, Erickson GM, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2021. Intraskeletal osteohistovariability reveals complex growth strategies in a Late Cretaceous enantiornithine. Frontiers in Earth Science, 9:640220.',
      'Clark AD, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2021. Exploring the ecomorphology of two Cretaceous enantiornithines with unique pedal morphology. Frontiers in Ecology and Evolution, 15:654156.',
      'Kiat Y, Pyle P, Balaban A, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2021. Reinterpretation of purported molting evidence in the Thermopolis Archaeopteryx. Communications Biology, 4:837',
      'Liu S-M, Li Z-H, Bailleul AM, Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2021. Investigating possible gastroliths in a referred specimen of Bohaiornis guoi (Aves: Enantiornithes). Frontiers in Earth Science, 9:635727.',
      'Stidham TA, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2021. The evolutionary and functional implications of the unusual quadrate of Longipteryx chaoyangensis (Avialae: Enantiornithes) from the Cretaceous Jehol Biota of China. Journal of Anatomy, 239(5), 1066-1074.',
      'Talori YS, Zhao J-S, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2021. Kinematics of wings from Caudipteryx to modern birds. Proceedings of the Institution of Mechanical Engineers, Part C: Journal of Mechanical Engineering Science.',
      'Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhao T, Pan Y-H, Zheng X-T, Wang X-L, Zhou Z-H. 2021. An Early Cretaceous enantiornithine bird with a pintail. Current Biology, 31(21), 4845-4852.',
      'Wu Q, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Li Z-H, Bailleul AM. 2021. Cartilage on the furculae of living birds and the extinct bird Confuciusornis: a preliminary analysis and implications for flight style inferences in Mesozoic birds. Vertebrata Palasiatica, 59(2): 110-124.',
      'Wu Q, Bailleul AM, Li Z-H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H. 2021. Osteohistology of the scapulocoracoid of Confuciusornis and preliminary analysis of the shoulder joint in Aves. Frontiers in Earth Science, 9: 617124.',
      'Xu L, Buffetaut E, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhang X-L, Jia S-H, Zhang J-M, Chang H-L, Tong H-Y. 2021. A new, remarkably preserved, enantiornithine bird from the Late Cretaceous of Henan (central China) and convergent evolution between enantiornithines and modern birds. Geological Magazine, 158(11), 2087-2094.',
    ],
  },
  {
    year: 2020,
    publications: [
      'Bailleul AM, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Li Z-H, Wu Q, Zhao T, Martinez Monleon MA, Wang M, Zheng X-T. 2020. Confirmation of ovarian follicles in an enantiornithine (Aves) from the Jehol Biota using soft tissue analyses. Communications Biology, 3: 1-8.',
      'Ding A, Pittman M, Upchurch P, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Field DJ, and Xu X. (2020). "The biogeography of coelurosaurian theropods and its impact on their evolutionary history", in: Pennaraptoran theropod dinosaurs: past progress and new frontiers. (eds.) M Pittman & X Xu). Bulletin of the American Museum of Natural History 40(440): 117-157.',
      'Hu H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M, McDonald PG, Wroe S, Zhou Z-H. 2020. New anatomical information of bohaiornithid Longusunguis confirms plesiomorphic diapsid skull retained in Enantiornithes. Journal of Systematic Palaeontology 18(18):1481-1495.',
      'Hu H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, McDonald PG, and Wroe S. 2020. Cranial osteology of the Early Cretaceous Sapeornis chaoyangensis (Aves: Pygostylia). Cretaceous Research 113(104496): 1-13.',
      'Kiat Y, Balaban A, Sapir N, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M, Xu X. 2020. Sequential moult in a feathered dinosaur and implications for early paravian locomotion and ecology. Current Biology 30(18): 3633-3638',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Falk AR, Wang M, Zheng X-T. 2020. First report of immature feathers in juvenile enantiornithines from the Early Cretaceous Jehol avifauna. Vertebrata Palasiatica, 58(1). 24-44.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zheng X-T, Pan Y-H, Wang X-L, Wang Y, Zhang X-M, Zhou Z-H. 2020. New information on the plumage of Protopteryx (Aves: Enantiornithes) from a new specimen. Cretaceous Research, 116: 1-17.',
      'Pittman M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Field DJ, Turner AH, Ma W-S, Makovicky PJ, Xu X. 2020. "Systematics, fossil record, and biogeography: pennaraptoran systematics," in Pennaraptoran theropod dinosaurs: past progress and new frontiers, eds. M Pittman & X Xu). Bulletin of the American Museum of Natural History 40(440): 39-95',
      'Pittman M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Tse E, Makovicky PJ, Field DJ, Ma W-S, Turner AH, Norell MA, Pei R, Xu X. 2020. "The fossil record of Mesozoic and Paleocene pennaraptorans," in Pennaraptoran theropod dinosaurs: past progress and new frontiers, eds. M Pittman & X Xu). Bulletin of the American Museum of Natural History 40(440): 7-36',
      'Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Bailleul AM, Li Z-H. 2020. Evolution and distribution of medullary bone: evidence from a new Early Cretaceous enantiornithine bird. National Science Review, 7(6): 1068-1078.',
      'Xing L-D, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Schmitz L, Chiappe LM, McKellar RC, Yi Q-R, Li G. 2020. Hummingbird-sized dinosaur from the cretaceous period of Myanmar. Nature, 579, 245-249. (corresponding author) [Retracted but citable according to the ICZN]',
      'Xing L-D, McKellar RC, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2020. An unusually large bird wing in mid-Cretaceous burmese amber. Cretaceous Research, 110(104412): 1-7.',
      'Xing LD, Cockx P, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, McKellar RC. 2020. A newly discovered enantiornithine foot preserved in mid-Cretaceous Burmese amber. Palaeoentomology, 3(2), 212-219.',
      'Xing L-D, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Niu K-C, Cockx P, Mai H-J, McKellar RC. 2020. A new enantiornithine (Aves) preserved in mid-Cretaceous Burmese amber contributes to growing diversity of Cretaceous plumage patterns. Frontiers in Earth Science, 8: 1-11.',
      'Yang S-H, He H-Y, Jin F, Zhang F-C, Wu Y-B, Yu Z-Q, Li Q-L, Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Deng, C-L, Zhu R-X, Zhou Z-H. 2020. The appearance and duration of the Jehol Biota: Constraint from SIMS U-Pb zircon dating for the Huajiying Formation in northern China. Proceedings of the National Academy of Sciences U.S.A., 117: 14299-14305.',
      'Zheng X-T, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang Y, Wang X-L, Yin X-W, Zhang, X-M, Zhou Z-H. 2020. New information on the keratinous beak of Confuciusornis (Aves: Pygostylia) from two new specimens. Frontiers in Earth Science, 8 (367): 1-14.',
      'Zheng X-T, Sullivan C, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang X-L, Wang Y, Zhang X-M, Zhou Z-H. 2020. Structure and possible ventilatory function of unusual, expanded sternal ribs in the Early Cretaceous bird Jeholornis. Cretaceous Research, 116 (104597): 1-10.',
    ],
  },
  {
    year: 2019,
    publications: [
      'Bailleul AM, Li Z-H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H. 2019. Origin of the avian predentary and evidence of a unique form of cranial kinesis in Cretaceous ornithuromorphs. Proceedings of the National Academy of Sciences U.S.A., 116(49): 24696-24706.',
      'Bailleul AM, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Schweitzer MH. 2019. Dinosaur paleohistology: review, trends and new avenues of investigation. PeerJ 7: e7764.',
      'Bailleul AM, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhang S-K, Li Z-H, Wang Q, Lamanna M, Zhu X-F, Zhou Z-H. 2019. An Early Cretaceous enantiornithine (Aves) preserving an unlaid egg and probable medullary bone. Nature Communications, 10(1275): 1-10.',
      'Falk AR, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M, Zhou Z-H. 2019. On the preservation of the beak in Confuciusornis (Aves: Pygostylia). Diversity, 11(212): 1-8.',
      'Hu H, Sansalone G, Wroe S, McDonald PG, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Li Z-H, Xu X, Zhou Z-H. 2019. Evolution of the vomer and its implications for cranial kinesis in Paraves. Proceedings of the National Academy of Sciences U.S.A., 116(39): 19571-19578.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H. 2019. The evolution of the modern avian digestive system – insights from paravian fossils from the Yanliao and Jehol biotas. Palaeontology, 63(1): 13-27.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2019. The trophic habits of early birds. Palaeogeography, Palaeoclimatology, Palaeoecology 513, 178-195',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zheng X-T, Dong L-P, Wang X-L, Wang Y, Zhang X-M, Zhou Z-H. 2019. Microraptor with ingested lizard suggests non-specialized digestive function. Current Biology, 29: 1-7.',
      'Pan YH, Zheng W-X, Sawyer RH, Penninngton M, Zheng X-T, Wang X-L, Wang M, Hu L, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhao T, Li Z-H, Schroeter E, Wu F-X, Xu X, Zhou Z-H, Schweitzer MH. 2019. The molecular evolution of feathers with direct evidence from fossils. Proceedings of the National Academy of Sciences U.S.A., 116(8): 3018-3023.',
      'Talori YS, Zhao J-S, Liu Y-F, Lu W-X, Li Z-H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2019. Identification of avian flapping motion from non-volant winged dinosaurs based on modal effective mass analysis. PLoS Computational Biology, 15(5): e1006846.',
      'Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou S, Zhou Z-H. 2019. New toothed Early Cretaceous ornithuromorph bird reveals intraclade diversity in pattern of tooth loss. Journal of Systematic Palaeontology, 18(8): 631-645.',
      'Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H. 2019. A taxonomical revision of the Confuciusornithiformes (Aves: Pygostylia). Vertebrata Palasiatica, 57(1), 1-37',
      'Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Xu X, Zhou Z-H. 2019. A new Jurassic scansoriopterygid and the loss of membranous wings in theropod dinosaurs. Nature, 569(7755): 256-259.',
      'Xing L-D, McKellar RC, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Bai M, Tseng K-W, Chiappe LM. 2019. A fully feathered enantiornithine foot and wing fragment preserved in mid-Cretaceous Burmese amber. Scientific Reports, 9(927): 1-9',
      'Xing L-D, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Chiappe LM, McKellar RC, Carroll N, Hu H, Bai M, Lei F-M. 2019. A new enantiornithine with unusual pedal proportions found in amber. Current Biology, 29(14): 2396-2401 (co-first author)',
      'Xing L-D, McKellar RC, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Niu K-C, Mai H-J. 2019. A mid-cretaceous enantiornithine foot and tail feather preserved in Burmese amber. Scientific Reports, 9:15513.',
    ],
  },
  {
    year: 2018,
    publications: [
      'Atterholt JA, Hutchison JH, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2018. The most complete enantiornithine from North America and a phylogenetic analysis of the Avisauridae. PeerJ 6, e5910.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Erickson GM, Norell MA, Bailleul AM, Hu H, Zhou Z-H. 2018. Medullary bone in an Early Cretaceous enantiornithine (Aves) and discussion regarding its identification in fossils. Nature Communications 9, 5169',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang X-L, Sullivan C, Wang Y, Zheng X-T, Hu H, Zhang X-M, Zhou Z-H. 2018. First report of gastroliths in the Early Cretaceous basal bird Jeholornis. Cretaceous Research 84, 200-208',
      'Rashid DJ, Surya K, Chiappe LM, Carroll N, Garrett KL, Varghese B, Bailleul AM, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Chapman SC, Horner JR. 2018. Avian tail ontogeny, pygostyle formation, and interpretation of juvenile Mesozoic specimens. Scientific Reports 8, 9014.',
      'Smith-Paredes D, Núñez-León D, Soto-Acuña S, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Botelho JF, Vargas AO. 2018. Dinosaur ossification centres in embryonic birds uncover developmental evolution of the skull. Nature Evolution & Ecology 2, 1966-1973',
      'Talori YS, Liu Y-F, Zhao J-S, Sullivan C, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Li Z-H. 2018. Winged forelimbs of the small theropod dinosaur Caudipteryx could have generated small aerodynamic forces during rapid terrestrial locomotion. Scientific Reports 8:17854',
      'Wang X-L, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Maina JN, Pan Y-H, Wang M, Wang Y, Zheng X-T, Zhou Z-H. 2018. Archaeorhynchus preserving significant soft tissue including probable fossilized lungs. Proceedings of the National Academy of Sciences U.S.A. 115(45): 11555-11560.',
      'Xing L-D, Cockx O, McKellar RC, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2018. Ornamental feathers in Cretaceous Burmese amber: resolving the enigma of rachis-dominated feather structure. Journal of Palaeogeography 7(13):1-18',
      'Xing L-D, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, McKellar RC, Chiappe LM, Bai M, Tseng K-W, Zhang J, Yang H-D, Fang J, Li G. 2018. A flattened enantiornithine in mid-Cretaceous Burmese amber: Morphology and preservation. Science Bulletin 63(4), 235-243.',
      'Zheng X-T, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang X-L, Wang Y, Zhou Z-H. 2018. Reinterpretation of a previously described Jehol bird clarifies early trophic evolution in the Ornithuromorpha. Proceedings of the Royal Society B: Biological Sciences 285, 20172494.',
    ],
  },
  {
    year: 2017,
    publications: [
      'Hu H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2017. First species of Enantiornithes from Sihedang elucidates skeletal development in Early Cretaceous enantiornithines. Journal of Systematic Palaeontology 15(11): 909-926.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zheng X-T, Hu H, Wang X-L, Zhou Z-H. 2017. The morphology of Chiappeavis magnapremaxillo (Pengornithidae: Enantiornithes) and a comparison of aerodynamic function in Early Cretaceous avian tail fans. Vertebrata Palasiatica 55, 1-18.',
      'Sullivan C, Xu X, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2017. Complexities and novelties in the early evolution of avian flight, as seen in the Mesozoic Yanliao and Jehol Biotas of northeast China. Palaeoworld 26(2): 212-229.',
      'Wang Y, Hu H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M, Xu X, Zhou Z-H, Wang X-L, Zheng X-T. 2017 A previously undescribed specimen reveals new information on the dentition of Sapeornis chaoyangensis. Cretaceous Research 74, 1-10.',
      'Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Pan Y-H, Zhou Z-H. 2017. A bizarre Early Cretaceous enantiornithine bird with unique crural feathers and an ornithuromorph plough-shaped pygostyle. Nature Communications, 8(14141): 1-12.',
      'Wang W, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2017 Morphological coevolution of the pygostyle and tail feathers in Early Cretaceous birds. Vertebrata Palasiatica 55(4): 289-314.',
      'Xing L-D, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, McKellar RC, Chiappe LM, Tseng K-W, Li G, Bai M. 2017 A mid-Cretaceous enantiornithine (Aves) hatchling preserved in Burmese amber with unusual plumage. Gondwana Research 49: 264-277.',
      'Zheng X-T, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Pan Y-H, Wang X-L, Wang Y, Wang M & Zhou Z-H. 2017. Exceptional preservation of soft tissue in a new specimen of Eoconfuciusornis and its biological implications. National Science Review 4(3): 441-452.',
    ],
  },
  {
    year: 2016,
    publications: [
      'Botelho JB, Smith-Paredes D,  Soto-Acuña S, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Palma V, Vargas A. 2016. Molecular development of fibular reduction in birds and its evolution from dinosaurs. Evolution DOI: 10.1111/evo.12882.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Li D-Q, Lamanna M, Wang M, Harris JD, Atterholt J, You H-L. 2016. A new Early Cretaceous enantiornithine (Aves: Ornithothoraces) from northwestern China with elaborate tail ornamentation. Journal of Vertebrate Paleontology, 36(1): e1054035.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang X-L, Zheng X-T, Hu H, Zhang X-M, Zhou Z-H. 2016. An enantiornithine with a fan-shaped tail, and the evolution of the rectricial complex in early birds. Current Biology, 26(1): 114-119.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M, Hu H. 2016. A new ornithuromorph (Aves) with an elongate rostrum from the Jehol Biota and the early evolution of rostralization in birds. Journal of Systematic Palaeontology 14(11): 939-948.',
      'Pan Y-H, Zheng W-X, Moyer A, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M, Zheng X-T, Wang X-L, Schroeter E, Zhou Z-H, Schweitzer MH. 2016. Molecular evidence of keratin and melanosomes in feathers of the Early Cretaceous bird Eoconfuciusornis. Proceedings of the National Academy of Sciences U.S.A. 113(49): E7900-E7907.',
      'Wang Y, Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H, Wang X-L, Zheng X-T, Zhang X-M. 2016. A new three dimensionally preserved Jehol enantiornithine bird with ovarian follicles. Journal of Vertebrate Paleontology 36(2): e1054496.',
      'Xing L, McKellar RC, Wang M, Bai M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Benton MJ, Zhang J, Wang Y, Tseng K, Lockley MG, Li G. 2016. Mummified precocial bird wings in mid-Cretaceous Burmese amber. Nature Communications 7, 12089.',
    ],
  },
  {
    year: 2015,
    publications: [
      'Brusatte SL, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Jarvis ED. 2015. The origin and diversification of birds. Current Biology 25: R888–R898.',
      'Hu H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK & Zhou Z-H. 2015. A new species of Pengornithidae (Aves: Enantiornithes) from the Lower Cretaceous of China suggests a specialized scansorial habitat previously unknown in early birds. PLoS ONE 10: e0126791.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zheng X-T, Sullivan C, Chuong C-M, Wang X-L, Li A, Wang Y, Zhang X-M & Zhou Z-H. 2015. Evolution and functional significance of derived sternal ossification patterns in ornithothoracine birds. Journal of Evolutionary Biology 28: 1550-1567.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zheng X-T, Wang XL, Zhang X-M & Zhou Z-H. 2015. The gastral basket in basal birds and their close relatives: size and possible function. Vertebrata Palasiatica 53: 133-152.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK & Zhou Z-H 2015. Early evolution of the biological bird: perspectives from new fossil discoveries in China. Journal of Ornithology: 1-10; 10.1007/s10336-015-1222-5.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK & Chang H-L. 2015. Hindlimb feathers in paravians: primarily ‘wings’ or ornaments? Biology Bulletin 42: 1-6.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M, Zhou S & Zhou Z-H. 2015. Osteohistology of the Lower Cretaceous Yixian Formation ornithuromorph (Aves) Iteravis huchzermeyeri. Palaeontologica Electronica 18.2: 1-11.',
      'Wang M, Zheng X-T, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Lloyd GT, Wang X-L, et al. 2015. The oldest record of Ornithuromorpha reveals heterogeneous rates of morphological evolution among Early Cretaceous birds. Nature Communications 6: 6987.',
      'Wang Y-M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Li D-Q, You H-L. 2015. New information on the postcranial skeleton of the Early Cretaceous Gansus yumenensis (Aves: Ornithuromorpha). Historical Biology DOI:10.1080/08912963.2015.1006217',
      'Wang M, Li D-Q, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H, You H-L. 2015. Second species of enantiornithine bird from the Lower Cretaceous Changma Basin, northwestern China with implications for the taxonomic diversity of the Changma avifauna. Cretaceous Research 55:56-65.',
      'Xu X, Zheng X-T, Sullivan C, Zhang F-C, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, et al. 2015. A bizarre Jurassic maniraptoran theropod with preserved evidence of membranous wings. Nature 521: 70-73.',
    ],
  },
  {
    year: 2014,
    publications: [
      'Chiappe LM, Zhao B, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Gao C-L, Habib M, Marugan-Lobon J, Meng Q-J, Cheng X-D. 2014. A new specimen of the early cretaceous bird Hongshanornis longicresta: Insights into the aerodynamics and diet of a basal ornithuromorph. PeerJ 2:e234; DOI 10.7717/peerj.234',
      'Hu H, Zhou Z-H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2014. A subadult specimen of Pengornis and character evolution in Enantiornithes. Vertebrata Palasiatica 52(1):77-97.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Sullivan C. 2014. Reinterpretation of the Early Cretaceous maniraptoran (Dinosauria: Theropoda) Zhongornis haoae as a scansoriopterygid-like non-avian, and the morphological resemblances between scansoriopterygids and basal oviraptorosaurs. Vertebrata Palasiatica 52(1):3-30.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M, Zheng X-T, Wang X-L, Zhou Z-H. 2014. The histology of two female Early Cretaceous birds. Vertebrata Palasiatica 52(1):112-128.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M, Zheng X-T, Zhou Z-H. 2014. Reply to Foth: [preserved cartilage is rare but not absent - troodontid sternal plates are absent not rare. Proceedings of the National Academy of Sciences, U.S.A., 111(50): E5335-E5335.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Chang H-L. Hindlimb feathers in paravians: primarily ‘wings’ or ornaments? 2014. Zoological Journal 93(10):1166-1172 [in Russian]',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Averianov A, Zelenkov NV. 2014. A confuciusornithiform (Aves: Pygostylia) -like tarsometatarsus from the Early Cretaceous of Siberia and a discussion of the evolution of avian hindlimb musculature. Journal of Vertebrate Paleontology 34(3): 647-56.',
      'Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zelenkov NV. 2014. A new diverse enantiornithine family (Bohaiornithidae fam. Nov.) From the lower cretaceous of china with information from two new species. Vertebrata Palasiatica 52(1):31-76.',
      'Wang X-L, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zheng X-T, Wang M, Hu H, Zhou Z-H. 2014. New information on the evolution of rachis dominated tail feathers from a new basal enantiornithine. Biological Journal of the Linnean Society 113:805-819. (corresponding author)',
      'Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H. 2014. A new robust enantiornithine bird from the Lower Cretaceous of China with scansorial adaptations. Journal of Vertebrate Paleontology 34(3): 657-671.',
      'Zhang Y-G, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Liu D, Meng Q-J, Sigurdsen T, Chiappe LM. 2014. New information on the anatomy of the Chinese Early Cretaceous Bohaiornithidae (Aves: Enantiornithes) from a subadult specimen of Zhouornis hani. PeerJ: e407; DOI 10.7717/peerj.407.',
      'Zhang S-K, Jin X-S, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M, Xie J-F. 2014. A new egg with avian egg shape from the Upper Cretaceous of Zhejiang Province, China. Historical Biology DOI: 10.1080/08912963.2014.902451. (corresponding author)',
      'Zheng X-T, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang X-L, Wang M, Zhang X-M, Zhou Z-H. 2014. On the absence of sternal elements in Anchiornis (Paraves: Troodontidae) and Sapeornis (Aves: Pygostylia) and the complex early evolution of the avian sternum. Proceedings of the National Academy of Sciences 111(38):13900-13905. (corresponding author)',
      'Zheng X-T, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang X-L, Zhou Z-H, Zhang X-M. 2014. New information on Hongshanornithidae (Aves: Ornithuromorpha) from a new subadult specimen. Vertebrata Palasiatica 52(2):217-232.',
      'Zheng X-T, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Huchzermeyer F, Wang X-L, Wang Y, Zhang X-M, Zhou Z-H. 2014. New specimens of Yanornis indicate a piscivorous diet and modern alimentary canal. PlosOne 9(4): e95036. doi:10.1371/journal.pone.0095036. (corresponding author)',
      'Zhou S, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang M. A new species from an ornithuromorph (Aves: Ornithothoraces) dominated locality of the Jehol Biota. 2014. Chinese Science Bulletin 59(36): 5366-5378. (corresponding author)',
    ],
  },
  {
    year: 2013,
    publications: [
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H. 2013. A redescription of Chaoyangia beishanensis (Aves) and a comprehensive phylogeny of Mesozoic birds. Journal of Systematic Palaeontology 11(7):889-906.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zelenkov NV. 2013. The phylogenetic position of Ambiortus: comparison with Early Cretaceous birds from Asia. Paleontological Journal RAS 47(11):1270–1281.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang X-L, Sullivan C, Zheng X-T, Tubaro P, Zhang X-M, Zhou Z-H. 2013. The unique caudal plumage of Jeholornis and complex tail evolution in early birds. Proceedings of the National Academy of Sciences 43(110): 17404-17408.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zheng X-T, Wang X-L, Wang Y, Zhou Z-H. 2013. Ovarian follicles shed new light on dinosaur reproduction during the transition towards birds. National Science Review 1(1): 15-17.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhang Y-G, Chiappe LM, Meng Q-J, Li Q-G, Liu D. 2013. A new enantiornithine from the Yixian Formation with the first recognized avian enamel specialization. Journal of Vertebrate Paleontology 33(1):1-12. [featured article]',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H, Zheng X-T. Zheng et al. reply. 2013. Nature.',
      'Wang Y-M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Li D-Q, You H-L. 2013. Previously unrecognized ornithuromorph bird diversity in the Early Cretaceous Changma Basin, Gansu Province, Northwestern China. PLoS ONE 8(10): e77693. doi:10.1371/journal.pone.0077693.',
      'Wang M, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H. 2013. The first fossil crow (Corvus sp. indet.) from the Early Pleistocene Nihewan Paleolithic sites in North China. Journal of Archaeological Science 40(3): 1623-1628.',
      'Zheng X-T, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Huchzermeyer FH, Wang X-L, Wang Y, Wang M, Zhou Z-H. Exceptional preservation of ovarian follicles in Early Cretaceous birds and implications for early evolution of avian reproductive behaviour. 2013. Nature 495: 507-511. (corresponding author)',
      'Zhou S, Zhou Z-H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2013. Anatomy of Archaeorhynchus spathula from the Early Cretaceous. Journal of Vertebrate Paleontology 33(1): 141-152.',
      'Zhou S, Zhou Z-H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2013. A new piscivorous ornithuromorph from the Jehol Biota. Historical Biology DOI: 10.1080/08912963.2013.819504.',
    ],
  },
  {
    year: 2012,
    publications: [
      'Brocklehurst N, Upchurch P, Mannion PD, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2012. The Completeness of the Fossil Record of Mesozoic birds: Implications for Early Avian Evolution. PLoS ONE 7(6): e39056',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2012. A revised look at Liaoningornis longidigitrus (Aves). Vertebrata Palasiatica 50(1): 25-37.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Sun C-K, Xu X, Wang X-L, Zhou Z-H. 2012. A new species of Jeholornis with complete caudal integument. Historical Biology 4(1): 29-41.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Chiappe LM, Chuong C-M, Bottjer DJ, You H-L. 2012. Homology and potential cellular and molecular mechanisms for the development of unique feather morphologies in early birds. Geosciences 2: 157-177.',
      'Zheng Z-T, Wang X-L, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H. 2012. Insight into the early evolution of the avian sternum from juvenile enantiornithines (Aves: Ornithothoraces). Nature Communications 3:1116, DoI: 10.1038/ncomms2104. (corresponding author)',
      'Zhou S, Zhou Z-H, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK. 2012. A new basal beaked ornithurine bird from the Lower Cretaceous of western Liaoning, China. Vertebrata Palasiatica 50(1): 9-24.',
    ],
  },
  {
    year: 2011,
    publications: [
      'Ji S-A, Atterholt J, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Lamanna MC, Harris JD, Li D-Q, You H-L, Dodson P. 2011. A new, three-dimensionally preserved enantiornithine (Aves: Ornithothoraces) from Gansu Province, China. Zoological Journal of the Linnean Society 162: 201-219.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Chiappe LM. 2011. A revision of enantiornithine (Aves: Ornithothoraces) skull morphology. Journal of Systematic Palaeontology 9(1): 135-147.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H, Xu X. 2011. Additional specimen of Microraptor provides first evidence of dinosaurs preying on birds. Proceedings of the National Academy of Sciences 108(49):19662–19665. http://blogs.nature.com/news/2011/11/fossil_flying_dino_enjoyed_tas.html',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Chiappe LM, Gao C-L, Zhao B. 2011. Anatomy of the Early Cretaceous bird Rapaxavis pani (Aves: Enantiornithes). Acta Palaeontologica Polonica 56(3): 463–475.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhou Z-H, Zhang F-C. 2011. A reappraisal of Boluochia zhengi (Aves: Enantiornithes) and a discussion of intraclade diversity in the Jehol avifauna, China. Journal of Systematic Palaeontology 9(1): 51-63.',
    ],
  },
  {
    year: 2010,
    publications: [
      '<span class="font-bold"><strong class="font-bold"><span class="font-bold">O\'Connor</span></strong></span> JK, Chiappe LM, Gao K-Q. 2010. A new species of ornithuromorph (Aves: Ornithothoraces) bird from the Jehol Group indicative of higher-level diversity. Journal of Vertebrate Paleontology 30(2): 311-321 [featured article]',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Dyke GD. 2010. Synonyms and the taxonomy of Mesozoic birds: the case of Sinornis and Cathayornis (Aves: Enantiornithes). Proceedings from the 7th meetingof the Society of Avian Palaeontology and Evolution.  62(1): 7-20.',
      'Wang X-R, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Zhao B, Chiappe LM, Gao C-H, Cheng X-D. 2010. A new species of Enantiornithes (Aves: Ornithothoraces) based on a well-preserved specimen from the Yixian Formation of northwestern China. Acta Geologica Sinica 84(2): 247-256. (corresponding author)',
      'You H-L, Atterholt J, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Lamanna MC, Harris JD, Li D-Q. 2010. A second ornithuromorph from the Changma Basin, Gansu Province, northwestern China. Acta Palaeontologica Polonica 55(4): 617 - 625.',
    ],
  },
  {
    year: 2009,
    publications: [
      'Close RA, Vickers-Rich P, Chiappe LM, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Rich TH, Kool L. 2009. Earliest Gondwanan bird from the Cretaceous of southeastern Australia. Journal of Vertebrate Paleontology 29(2):616–619.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang X-R, Chiappe LM, Gao C-H, Meng Q-J, Cheng X-D, Liu J-Y. 2009. Phylogenetic support for a specialized clade of Cretaceous enantiornithine birds with information from a new species. Journal of Vertebrate Paleontology 29(1):188-204.',
      'Tseng Z-J, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang X-M, and Prothero D. 2009. The first Old World occurrence of the North American mustelid Sthenictis (Carnivora, Mammalia). Geodiversitas 31(4): 743 - 751.',
    ],
  },
  {
    year: 2008,
    publications: [
      'Gao C-L, Chiappe LM, Meng Q-J, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Wang X-R, Cheng X, Liu J. 2008. A new basal lineage of Early Cretaceous birds from China and its implications on the evolution of the avian tail. Palaeontology 51:775-791.',
      '<strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Prothero D, Wang X-M, Li Q, Qiu Z-D. 2008. Magnetic stratigraphy of the Lower Pliocene Gaotege beds, Inner Mongolia. New Mexico Museum of Natural History and Science Bulletin 44:431-436.',
    ],
  },
  {
    year: 2006,
    publications: [
      'You H-L, Lamanna MC, Harris JD, Chiappe LM, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Ji S-A, Lü J-C, Yuan C-X, Li D-Q, Zhang X, Lacovara KJ, Dodson P, Ji Q. 2006. A nearly modern amphibious bird from the Early Cretaceous of northwestern China. Science 312:1640-1643.',
      'Zhang Z-H, Hou L-H, Hasegawa Y, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Martin LD, Chiappe LM. 2006. The first Mesozoic heterodactyl bird from China. Acta Geologica Sinica (English Edition)',
    ],
  },
  {
    year: 2005,
    publications: [
      'You H-L, <strong class="font-bold"><span class="font-bold">O\'Connor</span></strong> JK, Chiappe LM, Ji Q. 2005. A new fossil bird from the Early Cretaceous of Gansu Province, northwestern China. Historical Biology 17:7-14.',
    ],
  },
];

const bookChapter: string[] = [
  'Button DJ, Chin K, Nabavizadeh A, <span class="font-bold">O’Connor</span> JK. In press (TBA). Feeding in extinct dinosaurs. In: Zanno L, Arbour V, Holtz T (ed), <span class="underline">The Complete Dinosaur</span>. Indiana University Press.',
  '<span class="font-bold">O’Connor</span> JK. In press. The early evolution of birds. In: Edwards S, Reed M (eds), <span class="underline">New Perspectives in Ornithology</span>. Oxford University Press.',
  '<span class="font-bold">O’Connor</span> JK. In press. <span class="italic">Archaeopteryx</span> Quick Guide. Current Biology',
  '<span class="font-bold">O’Connor</span> JK. 2022. Enantiornithes. <span class="italic">Current Biology</span> 32 (20), R1166-R1172.',
  '<span class="font-bold">O’Connor</span> JK. 2022. Sparrows with teeth and claws? Reconstructing the Cretaceous Enantiornithes (Aves: Ornithothoraces). In: Bienvenue V and Chare N (eds), <span class="underline">Animals, Plants and Afterimages</span>. New York: Berghahn. Pp. 169-190. ISBN 978-1-80073-425-8',
  '<span class="font-bold">O’Connor</span> JK. 2022. The plumage of basal birds. In: Foth C, Rauhut O (eds), <span class="underline">The evolution of feathers: a palaeontological perspective</span>. Springer. Pp. 147-172. ISBN 978-3-030-27223-4',
  'Sanz JL, Chamero B, Chiappe LM, Marugán-Lobón J, <span class="font-bold">O’Connor</span> JK</span>, Ortega F, Escaso F. 2016. Aves. In: Poyato-Ariza FJ & Buscalioni AD (eds), <span class="underline">Las Hoyas: A Cretaceous Wetland. A multidisciplinary synthesis after 25 years of research on an exceptional fossil Lagerstatte from Spain</span>. Pfeil Verlag, Munich, Alemania. Pp. 183-189. ISBN 978-3-89937-153-6',
  '<span class="font-bold">O’Connor</span> JK, Chiappe LM, Bell A. 2011. Pre-modern birds: avian divergences in the Mesozoic. In: Dyke GJ, Kaiser G (eds), <span class="underline">Living Dinosaurs: the evolutionary history of modern birds</span>. UC Press. Pp. 39-116. ISBN 978-0-470-65666-2',
];

const conferenceAbstracts: { year: number; content: string[] }[] = [
  {
    year: 2024,
    content: [
      '<span class="font-bold">O’Connor</span> JK. Chicago Archaeopteryx reveals early transformations in the avian skull. <span class="italic">84th Annual meeting of the Society of Vertebrate Paleontology.</span>',
    ],
  },
  {
    year: 2023,
    content: [
      '<span class="font-bold">O’Connor</span> JK. The bizarre biology of Enantiornithes. <span class="italic">10th Meeting of the Society of Avian Paleontology and Evolution</span> [Plenary talk]',
      '<span class="font-bold">O’Connor</span> JK, Clark AD, Herrera F, Yang X, Wang X-L, Zheng X-T, Zhou Z-H. Longipteryx (Aves: Enantiornithes) stomach contents indicate that morphology does not accurately predict diet in enantiornithines. <span class="italic">83rd Annual meeting of the Society of Vertebrate Paleontology.</span>',
      '<span class="font-bold">O’Connor</span> JK and Kiat Y. Neontological Dataset reveals functional constraints in flight feathers. <span class="italic">Norell Dinosaur Conference.</span>',
    ],
  },
  {
    year: 2022,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Cruz-Vega E, Fabbri M. Testing hypotheses regarding super-precocial flight in Enantiornithes. <span class="italic">6th International Palaeontological Congress</span> (Symposium organizer).',
    ],
  },
  {
    year: 2021,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Stidham TA, Harris JD, Lamanna M, Bailleul AM, Hu H, Wang M, You H-L. First avian skulls from the Lower Cretaceous Xiagou Formatiom, Gansu, China. <span class="italic">81st Annual Meeting of the Society of Vertebrate Paleontology.</span>',
    ],
  },
  {
    year: 2019,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Bailleul AM, Wang M, Li Z-H, Zhou Z-H. Investigating probable reproductive tissues in stem birds using advanced microscopic analytical methods. <span class="italic">79th Annual Meeting of the Society of Vertebrate Paleontology</span> (invited symposium speaker).',
      '<span class="font-bold">O’Connor</span> JK, Li D-P, Zheng X-T, Wang X-L, Wang Y, Zhou Z-H. Microraptor with ingested lizard preserved in situ and preliminary reconstruction of the Jehol food web. <span class="italic">Geological Society of America Annual Meeting.</span>',
      '<span class="font-bold">O’Connor</span> JK, Bailleul AM, Wang M, Zhou Z-H. Histology of juvenile enantiornithines from the Early Cretaceous Jehol Biota. <span class="italic">5th International Symposium on Paleohistology.</span>',
      '<span class="font-bold">O’Connor</span> JK. Soft tissue preservation in fossil birds from the Early Cretaceous Jehol Biota. <span class="italic">4th International Meeting for Early-stage Researchers in Paleontology</span> (Keynote speaker)',
    ],
  },
  {
    year: 2018,
    content: [
      '<span class="font-bold">O’Connor</span> JK. The trophic habits of early birds. <span class="italic">62nd annual meeting of the Palaeontological Society</span> (invited speaker)',
      '<span class="font-bold">O’Connor</span> JK, Maina J, Pan Y-H, Wang M, Wang X-L, Wang Y, Zheng X-T, Zhou Z-H. A specimen of <span class="italic">Archaeorhynchus</span> preserving significant soft tissue including the first probable occurrence of fossilized lungs. <span class="italic">78th annual meeting of the Society of Vertebrate Paleontology</span>',
      '<span class="font-bold">O’Connor</span> JK, Zhou Z-H. Pygostyle formation in early birds. <span class="italic">5th International Palaeontological Congress.</span>',
    ],
  },
  {
    year: 2017,
    content: [
      '<span class="font-bold">O’Connor</span> JK. The trophic habits of early birds. <span class="italic">77th annual meeting of the Society of Vertebrate Paleontology.</span>',
      '<span class="font-bold">O’Connor</span> JK, Erickson G, Norell M, Hu H, Zhou Z-H. Definitive occurrence of medullary bone in an enantiornithine (Aves: Ornithothoraces). <span class="italic">4th International Symposium on Paleohistology.</span>',
      '<span class="font-bold">O’Connor</span> JK, Zheng X-T, Wang X-L, Zhou Z-H. The biology of Eoconfuciusornis. <span class="italic">76th annual meeting of the Society of Vertebrate Paleontology</span> (book of abstracts p. 189).',
      '<span class="font-bold">O’Connor</span> JK. Paravian sternal ossification patterns. <span class="italic">Meeting of the Chinese Society of Vertebrate Paleontology</span> [keynote speaker]',
      '<span class="font-bold">O’Connor</span> JK, Wang M, Hu H, Wang W, Zhou Z-H. A review of recent discoveries of ornithothoracines from the Cretaceous of China. <span class="italic">10th meeting of the Society of Avian Paleontology and Evolution.</span>',
    ],
  },
  {
    year: 2015,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Sullivan C, Zhou Z-H, Zheng X-T. Evolution and functional significance of derived sternal ossification patterns in ornithothoracine birds. <span class="italic">75th annual meeting of the Society of Vertebrate Paleontology.</span>',
      '<span class="font-bold">O’Connor</span> JK, Choiniere JC. The early evolution of Aves. <span class="italic">Biennial meeting of the Systematics Association.</span> [symposium]',
      '<span class="font-bold">O’Connor</span> JK, Atterholt J. Evolution of rapid growth in Ornithothoraces. <span class="italic">3rd International Symposium on Paleohistology.</span>',
    ],
  },
  {
    year: 2014,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Zhou Z-H. Earliest stages in the evolution of the modern avian skeleton: Archaeopteryx and the Jehol avifauna compared. <span class="italic">74th annual meeting of the Society of Vertebrate Paleontology.</span> [symposium]',
      '<span class="font-bold">O’Connor</span> JK. Early evolution of birds: perspectives from new fossil discoveries in China. IV Simposio Paleontologia en Chile.</span> [keynote speaker]',
      '<span class="font-bold">O’Connor</span> JK. Evolution of the biologically modern bird: evidence from the Early Cretaceous Jehol Biota. <span class="italic">4th International Palaeontological Congress.</span> [symposium organizer]',
      'Zhou Z-H, <span class="font-bold">O’Connor</span> JK. Early evolution of birds: perspectives from new fossil discoveries in China. <span class="italic">26th International Ornithological Congress</span> [symposium keynote, presenter: <span class="font-bold">O’Connor</span>]',
    ],
  },
  {
    year: 2013,
    content: [
      '<span class="font-bold">O’Connor</span> JK. New information challenging the monophyly of Mesozoic Aves. <span class="italic">International Conference on Evolutionary Ornithology</span> in memory of Evgeny Kurochkin, Moscow, Russia.',
      '<span class="font-bold">O’Connor</span> JK. The histology of two Early Cretaecous female birds. <span class="italic">2nd International Symposium on Paleohistology.</span>',
      '<span class="font-bold">O’Connor</span> JK. Tail evolution in early birds: soft tissue and skeletal evidence from the Jehol. <span class="italic">73rd annual meeting of the Society of Vertebrate Paleontology.</span>',
      '<span class="font-bold">O’Connor</span> JK. Tail evolution in early birds: soft tissue and skeletal evidence from the Jehol. <span class="italic">10th Annual Meeting of the European Association of Vertebrate Palaeontologists</span>, Villers-sur-mer, France.',
    ],
  },
  {
    year: 2012,
    content: [
      '<span class="font-bold">O’Connor</span> JK. A brief overview of the current data on Enantiornithes (Aves: Ornithothoraces). <span class="italic">9th meeting of the Society of Avian Paleontology and Evolution.</span>',
      '<span class="font-bold">O’Connor</span> JK. Dietary evolution in Mesozoic birds. <span class="italic">72nd annual meeting of the Society of Vertebrate Paleontology</span>',
    ],
  },
  {
    year: 2011,
    content: [
      '<span class="font-bold">O’Connor</span> JK. The morphology and early evolution of the avian sternum. <span class="italic">IV Congreso Latinoamericano Paleontologia de Vertebrados</span>, San Juan, Argentina.',
      '<span class="font-bold">O’Connor</span> JK. Recent advances in Chinese Mesozoic bird taxonomy and systematics. <span class="italic">26th meeting of the Chinese Society of Paleontology</span> [in Chinese]',
      '<span class="font-bold">O’Connor</span> JK, Zhou Z-H. Small theropod with bird in stomach indicates both lived in trees. <span class="italic">Journal of Vertebrate Paleontology</span> 31(3). http://www.economist.com/node/21538077',
      '<span class="font-bold">O’Connor</span> JK, Zhou Z-H. The morphology and early evolution of the avian sternum. <span class="italic">9th Annual Meeting of the European Association of Vertebrate Palaeontologists</span>, Heraklion, Crete, Greece.',
    ],
  },
  {
    year: 2010,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Zhou Z-H. A new look at ‘old’ birds from the Jehol Fauna. <span class="italic">Journal of Vertebrate Paleontology</span> 30(3): 141A.',
      '<span class="font-bold">O’Connor</span>, Zhou Z-H, Zhang FC. A reappraisal of Boluochia zhengi (Aves: Ornithothoraces). <span class="italic">Chinese Society of Vertebrate Paleontology</span> [in Chinese]',
    ],
  },
  {
    year: 2009,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Chiappe LM and Bell A. A comprehensive phylogeny of Mesozoic birds. <span class="italic">Journal of Vertebrate Paleontology</span> 29(3): 157A.',
    ],
  },
  {
    year: 2008,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Chiappe LM. A review of the enantiornithine (Aves: Ornithothoraces) skull. <span class="italic">Journal of Vertebrate Paleontology</span> 28(3): 97A.',
      '<span class="font-bold">O’Connor</span> JK, Chiappe LM, Gao C-L. A review of the Enantiornithine (Aves: Ornithothoraces) skull with information from a new species. <span class="italic">CalPaleo</span>.',
      '<span class="font-bold">O’Connor</span> JK, Chiappe LM. A Review of the enantiornithine (Aves: Ornithothoraces) skull. <span class="italic">8th meeting of the Society of Avian Paleontology and Evolution.</span>',
    ],
  },
  {
    year: 2007,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Meng Q-J, Chiappe LM, Wang X-R. Longirostrine enantiornithine birds; information from a new Chinese specimen. <span class="italic">CalPaleo.</span>',
    ],
  },
  {
    year: 2006,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Meng Q-J, Wang X-R, and Chiappe LM. Longirostrine enantiornithine birds: Information from a new Chinese specimen. <span class="italic">Journal of Vertebrate Paleontology</span> 26(3): 106A.',
      '<span class="font-bold">O’Connor</span> JK, Chiappe LM, and Gao Q-K. A new fossil bird from the Lower Cretaceous Jiufotang Formation, Liaoning Province, northwestern China. <span class="italic">2nd International Palaeontology Congress</span>: 442.',
    ],
  },
  {
    year: 2005,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Chiappe LM, and Gao Q-K. A new fossil bird from the lower Cretaceous Jiufotang Formation, Liaoning Province, northwestern China. Journal of Vertebrate Paleontology</span> 25(3): 97A.',
    ],
  },
  {
    year: 2004,
    content: [
      '<span class="font-bold">O’Connor</span> JK, Chiappe LM. New Enantiornithine Bird from the Early Cretaceous of Gansu Province, Northwestern China. <span class="italic">Journal of Vertebrate Paleontology</span> 24(3):99A.',
      '<span class="font-bold">O\'Connor</span> JK, Prothero DR, Wang X-M, Li Q, Qiu Z-D. Magnetic stratigraphy of the Lower Pliocene Gaotege beds, Inner Mongolia. <span class="italic">Western Association of Vertebrate Paleontology</span>.',
    ],
  },
  {
    year: 2003,
    content: [
      'Liter M, Prothero DR, and <span class="font-bold">O’Connor</span> JK.Land Mammals from the Middle 	Miocene Round Mountain Silt, Northeast of Bakersfield, California. <span class="italic">Western Association of Vertebrate Paleontology</span>.',
      '<span class="font-bold">O\'Connor</span> JK, Prothero DR, and Wang, X-M. New specimen of the Miocene mustelid Sthenictis from the Miocene of Inner Mongolia, China. <span class="italic">Southern California Conference on Undergraduate Research</span>.',
      '<span class="font-bold">O\'Connor</span> JK, Prothero DR, and Wang, X-M. New specimen of the Miocene mustelid Sthenictis from the Miocene of Inner Mongolia, China. <span class="italic">Geological Society of America Abstracts with Programs</span>.',
      '<span class="font-bold">O’Connor</span> JK, Prothero DR, and Wang X-M. New specimen of the Miocene  mustelid Sthenictis from the Miocene of Inner Mongolia, China. <span class="italic">Journal of Vertebrate Paleontology</span> 23(3):79A.',
    ],
  },
];

export default function Page() {
  return (
    <Layout>
      <section className="max-w-2xl mx-auto">
        <p className="pb-4">
          Down below you will find the full bibliography of my recent studies
        </p>
        <Heading as="h4" size="subsection" text="Peer-reviewed Scientific Papers" />
        {bibliography.map((item, idx) => (
          <div key={idx}>
            <Heading as="h5" size="label" text={item.year.toString()} />
            <div className="flex flex-col gap-2 mb-12">
              {item.publications.map((v, idx) => (
                <p
                  key={idx}
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: v }}
                />
              ))}
            </div>
          </div>
        ))}

        <Heading as="h4" size="subsection" text="Book Chapters, Primers, & Editorials" />
        <div className="flex flex-col gap-2 mb-12">
          {bookChapter.map((v, idx) => (
            <p
              key={idx}
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: v }}
            />
          ))}
        </div>

        <Heading as="h4" size="subsection" text="Books" />
        <p>
          <span className="italic">Zoom out: Prehistoric World,</span> DK (in
          prep.)
        </p>
        <p>
          <span className="italic">When Dinosaurs Conquered the Skies,</span>{" "}
          Quarto Publishing (2022)
        </p>
        <p className="ml-8 mb-12">
          Winner of the Society of Midland Authors Children’s Non-fiction Award
          (2023)
        </p>

        <Heading as="h4" size="subsection" text="Conference Abstracts" />
        {conferenceAbstracts.map((item) => (
          <div className="flex flex-row mb-4" key={item.year}>
            <p className="min-w-40 font-bold">{item.year}</p>
            <div className="flex flex-col">
              {item.content.map((v, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: v }} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
