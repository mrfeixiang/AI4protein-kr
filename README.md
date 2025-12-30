# AI4Protein 2025 한국어 번역

시간이 화살처럼 빠르게 흘러, 작년에 AI4Protein 2024를 정리했습니다. 연말 정리가 전통이 되어 본 글을 작성하게 되었습니다.

올해 많은 논문을 살펴보면서 2025년의 몇 가지 현상과 트렌드를 발견했습니다:

- **AI 항체 설계 모델**이 우후죽순처럼 등장
- **전원자(All-atom) 통합 설계**가 보편화
- **유전체/다중오믹스 대규모 모델**의 대중화
- **AI 에이전트**의 생물학/의약 분야 적용

본 글의 AI 모델 순서는 특별한 순위가 아니며, 설명이나 분류에 오류가 있을 수 있고 누락된 모델도 있을 수 있습니다. 독자분들의 댓글을 통한 보완과 오류 수정을 환영합니다.

---

## 목차

1. [CNS 정식 저널](#1-cns-정식-저널)
2. [David Baker](#2-david-baker)
3. [구조 예측](#3-구조-예측)
4. [단백질 설계](#4-단백질-설계)
5. [AI 에이전트](#5-ai-에이전트)
6. [언어 모델](#6-언어-모델)
7. [구조 샘플링](#7-구조-샘플링)
8. [기타 모델](#8-기타-모델)

---

## 1. CNS 정식 저널

### 1.1 Nature

| 제목 | 링크 |
|------|------|
| Nature｜2026 과학 전망 | [Nature](https://www.nature.com/) |
| Nature｜2026 인물 전망 | [Nature](https://www.nature.com/) |
| Nature｜2025 올해의 사진 | [Nature](https://www.nature.com/) |
| Nature｜2025 10대 인물 | [Nature](https://www.nature.com/) |
| **BindCraft**｜*De novo* Binder 설계 | [Nature](https://www.nature.com/articles/s41586-025-09429-6) / [GitHub](https://github.com/martinpacesa/BindCraft) |
| **Riff-Diff**｜*De novo* 효소 단백질 설계 | [Nature](https://www.nature.com/articles/s41586-025-09747-9) |
| **Evo**｜*De novo* 기능성 유전자 설계 | [Arc Institute](https://arcinstitute.org/news/evo) / [GitHub](https://github.com/evo-design/evo) |
| **EZSpecificity**｜효소 특이성 예측 | [Nature](https://www.nature.com/) |
| **CATNIP**｜생물촉매 반응 예측 | [Nature](https://www.nature.com/) |
| **PAN-GO**｜단백질 유전자 기능 주석 | [Nature](https://www.nature.com/) |
| **HORNET**｜AFM을 활용한 RNA 구조 해석 | [Nature](https://www.nature.com/) |
| **PATCH**｜항원 생성 | [Nature](https://www.nature.com/) |
| **Delphi-2M**｜AI가 인간 자연 질병사 학습 | [Nature](https://www.nature.com/) |
| **OpenCRISPR**｜CRISPR-gRNA 시스템 설계 | [Profluent Bio](https://www.profluent.bio/) |
| **MaSIF-neosurf**｜단백질 분자 계면 Binder 표적 설계 | [Nature](https://www.nature.com/) |
| **Virtual Lab**｜에이전트를 이용한 SARS-CoV-2 나노바디 설계 | [Nature](https://www.nature.com/) |
| David Baker｜*De novo* 뱀독 Binder 설계 | [Nature](https://www.nature.com/articles/s41586-024-08393-x) |
| David Baker｜*De novo* 금속 가수분해효소 설계 | [Nature](https://www.nature.com/articles/s41586-025-09746-w) |
| David Baker｜*De novo* 칼슘 이온 채널 설계 | [Nature](https://www.nature.com/) |
| David Baker｜RFantiboy *de novo* 항체 설계 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.03.14.585103) / [Baker Lab](https://www.bakerlab.org/) |
| David Baker｜확산 모델로 IDP 표적 Binder 설계 | [Nature](https://www.nature.com/) |
| David Baker｜*De novo* Binder 설계로 단백질 해리 조절 | [Nature](https://www.nature.com/) |
| Brain Hie｜언어 모델로 기능성 유전자 생성 | [Nature](https://www.nature.com/) |
| 루페이룽｜*De novo* 기능성 막관통 형광 단백질 설계 | [Nature](https://www.nature.com/) |
| 가오차이샤｜AI 육종 종합 리뷰 | [Nature](https://www.nature.com/) |

### 1.2 Science

| 제목 | 링크 |
|------|------|
| Science｜2025 올해의 돌파구 | [Science](https://www.science.org/) |
| Science｜2025 올해의 좌절 | [Science](https://www.science.org/) |
| **ESM3**｜멀티모달 단백질 언어 모델 | [Science](https://www.science.org/doi/10.1126/science.ads0018) / [GitHub](https://github.com/evolutionaryscale/esm) / [EvolutionaryScale](https://www.evolutionaryscale.ai/blog/esm3-release) |
| **GEMORNA**｜mRNA 설계 모델 | [Science](https://www.science.org/) |
| **BioEmu**｜단백질 단량체 다중 구조 샘플링 | [Science](https://www.science.org/doi/10.1126/science.adv9817) / [GitHub](https://github.com/microsoft/bioemu) / [HuggingFace](https://huggingface.co/microsoft/bioemu) |
| **ProtGPS**｜단백질 세포내 위치 예측 | [Science](https://www.science.org/) |
| **FINCHES**｜IDR과 분자 상호작용 예측 | [Science](https://www.science.org/) |
| **PromoterAI**｜프로모터 기능에 영향을 미치는 돌연변이 예측 | [Science](https://www.science.org/) |
| David Baker｜RF2-PPI 단백질 상호작용 예측 | [Science](https://www.science.org/) |
| David Baker｜IDP 표적 Binder 설계 | [Science](https://www.science.org/) |
| David Baker｜PLACER 다단계 반응 효소 설계 | [Science](https://www.science.org/) |
| David Baker｜펩타이드-MHC-I 복합체 표적 설계 | [Science](https://www.science.org/) |
| William DeGrado｜*De novo* 키랄 선택성 효소 설계 | [Science](https://www.science.org/) |
| 가오차이샤｜GRAPE 플랫폼으로 GOI 신속 지향 진화 | [Science](https://www.science.org/) |

### 1.3 Cell

| 제목 | 링크 |
|------|------|
| **MAGE**｜언어 모델 항체 설계 | [Cell](https://www.cell.com/) |
| **BEAUT**｜담즙산 대사 효소 예측 및 발견 | [Cell](https://www.cell.com/) |
| 루페이룽｜*De novo* 이온 채널 단백질 설계 | [Cell](https://www.cell.com/) |
| 천펑｜CAGE-Prox 단백질 원위치 활성화 | [Cell](https://www.cell.com/) |
| 가오차이샤｜진화사 기반 보조효소 CoQ10 설계 | [Cell](https://www.cell.com/) |
| 가오차이샤｜AiCE 모델 지향 진화 | [Cell](https://www.cell.com/) |
| 가오차이샤｜대형 DNA 단편 편집 시스템 | [Cell](https://www.cell.com/) |
| 가오차이샤｜CRISPR 시스템 기원 분자 메커니즘 규명 | [Cell](https://www.cell.com/) |

### 1.4 기타 저널

| 제목 | 링크 |
|------|------|
| Nature Methods｜2025 올해의 방법 | [Nature Methods](https://www.nature.com/nmeth/) |
| Nature Methods｜RNA 구조 예측 | [Nature Methods](https://www.nature.com/nmeth/) |
| Nature Biotechnology｜2025 올해의 기술 | [Nature Biotechnology](https://www.nature.com/nbt/) |
| Nature Methods｜생명과학을 위한 AI 에이전트 | [Nature Methods](https://www.nature.com/nmeth/) |
| Brain Hie｜**Evo2** 모델 | [Arc Institute](https://arcinstitute.org/) |
| **CRISPR-All**｜AI 기반 유전자 교란 언어 | - |
| **CRISPR-GPT**｜유전자 편집용 AI 에이전트 | - |
| **ProDomino**｜제어 가능한 알로스테릭 단백질 스위치 설계 | - |

---

## 2. David Baker

### 모델

| 모델명 | 링크 |
|--------|------|
| **PLACER** | [IPD](https://www.ipd.uw.edu/) |
| **RFDploy** | [IPD](https://www.ipd.uw.edu/) |
| **RF2-PPI** | [IPD](https://www.ipd.uw.edu/) |
| **RFantiboy** | [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.03.14.585103) / [Baker Lab](https://www.bakerlab.org/2025/02/28/designing-antibodies-with-rfdiffusion/) |
| **RFdiffusion3** | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.09.18.676967) / [GitHub](https://github.com/RosettaCommons/RFdiffusion3) / [IPD News](https://www.ipd.uw.edu/2025/12/rfdiffusion3-now-available/) |
| **RFdiffusion2** | [Nature Methods](https://www.nature.com/articles/s41592-025-02975-x) |
| **RosettaFold3** | [IPD](https://www.ipd.uw.edu/) |
| **RFD2-MI** | [IPD](https://www.ipd.uw.edu/) |
| **LigandMPNN** | [GitHub](https://github.com/dauparas/LigandMPNN) |
| **ResiDPO** | [IPD](https://www.ipd.uw.edu/) |
| **NA-MPNN** | [IPD](https://www.ipd.uw.edu/) |
| **RFpeptides** | [IPD](https://www.ipd.uw.edu/) |
| **Seq2Symm** | [IPD](https://www.ipd.uw.edu/) |
| **LSD: Latent and Structure Diffusion** | [IPD](https://www.ipd.uw.edu/) |

### 주요 논문

| 저널 | 제목 | 링크 |
|------|------|------|
| Nature | *De novo* 칼슘 이온 채널 설계 | [Nature](https://www.nature.com/) |
| Nature | *De novo* 뱀독 Binder 설계 | [Nature](https://www.nature.com/articles/s41586-024-08393-x) |
| Nature | 확산 모델로 IDP 표적 Binder 설계 | [Nature](https://www.nature.com/) |
| Nature | *De novo* Binder로 단백질 해리 조절 | [Nature](https://www.nature.com/) |
| Nature | *De novo* 금속 가수분해효소 설계 | [Nature](https://www.nature.com/articles/s41586-025-09746-w) |
| Nature | *De novo* 사이토카인(IL 계열) Binder 설계 | [Nature](https://www.nature.com/) |
| Science | IDP 표적 Binder 설계 | [Science](https://www.science.org/) |
| Science | *De novo* p-MHC Binder 설계 | [Science](https://www.science.org/) |
| Science | *De novo* 세린 가수분해효소 설계 | [Science](https://www.science.org/) |
| Cell | 가용성 Notch 작용제 설계로 T세포 발달 촉진 | [Cell](https://www.cell.com/) |

---

## 3. 구조 예측

### 주요 모델

| 모델명 | 설명 | 링크 |
|--------|------|------|
| **ESM3** | 멀티모달 단백질 언어 모델 | [GitHub](https://github.com/evolutionaryscale/esm) / [Science](https://www.science.org/doi/10.1126/science.ads0018) |
| **RosettaFold3** | David Baker Lab의 구조 예측 모델 | [IPD](https://www.ipd.uw.edu/) |
| **OpenFold3** | 오픈소스 AlphaFold3 구현 | [GitHub](https://github.com/aqlaboratory/openfold) |
| **D-I-TASSER** | 딥러닝 기반 구조 예측 | [Zhang Lab](https://zhanggroup.org/) |
| **Boltz-1** | MIT의 오픈소스 구조 예측 모델 | [GitHub](https://github.com/jwohlwend/boltz) / [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.11.19.624167) / [MIT News](https://news.mit.edu/2024/researchers-introduce-boltz-1-open-source-model-predicting-biomolecular-structures-1217) |
| **Boltz-1x** | Boltz-1 확장 버전 | [GitHub](https://github.com/jwohlwend/boltz) |
| **CryoBoltz** | Cryo-EM 기반 구조 예측 | - |
| **Protenix** | ByteDance의 구조 예측 모델 | [GitHub](https://github.com/bytedance/protenix) |
| **Protenix-Mini** | 경량화된 Protenix | [GitHub](https://github.com/bytedance/protenix) |
| **ROCKET** | 빠른 구조 예측 모델 | - |
| **SimpleFold** | 단순화된 구조 예측 | - |
| **MultiFOLD2** | 다중 구조 예측 | - |
| **AF3Complex** | AlphaFold3 복합체 예측 | - |

### 펩타이드 구조 예측

| 모델명 | 링크 |
|--------|------|
| GraphPep | - |
| DistPepFold | - |
| RareFold | - |
| CyclicBoltz1 | - |
| AfCycDesign | - |
| HighFold3 | - |
| MeDCycFold | - |

### RNA 구조 예측

| 모델명 | 링크 |
|--------|------|
| NuFold | - |

### 벤치마크

| 이름 | 링크 |
|------|------|
| FoldBench | - |

---

## 4. 단백질 설계

### 4.1 범용 설계

| 모델명 | 설명 | 링크 |
|--------|------|------|
| **RFdiffusion3** | 전원자 수준 단백질 설계 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.09.18.676967) / [GitHub](https://github.com/RosettaCommons/RFdiffusion3) |
| **HalluDesign** | 할루시네이션 기반 설계 | - |
| **Protein Hunter** | 단백질 헌터 | - |
| **ODesign** | - | - |
| **BoltzGen** | Boltz 기반 생성 모델 | - |
| **BoltzDesign1** | Boltz 설계 모델 | - |
| **OriginFlow** | 플로우 기반 설계 | - |
| **Neo-1** | - | - |
| **UniMoMo** | 통합 모달 모델 | - |
| **Pallatom** | 전원자 설계 | - |

### 4.2 역접힘 (Inverse Folding)

| 모델명 | 설명 | 링크 |
|--------|------|------|
| **LigandMPNN** | 리간드 결합 서열 설계 | [GitHub](https://github.com/dauparas/LigandMPNN) |
| **ResiDPO** | DPO 기반 서열 최적화 | - |
| **NA-MPNN** | 핵산 결합 서열 설계 | - |
| **ABACUS-T** | - | - |
| **DynamicMPNN** | 동적 서열 설계 | - |
| **AntiBMPNN** | 항체 서열 설계 | - |
| **UniIF** | 통합 역접힘 모델 | - |
| **HighMPNN** | 고성능 MPNN | - |
| **ProDualNet** | 듀얼 네트워크 | - |
| **CAPE-Beam** | - | - |
| **EnerBridge-DPO** | 에너지 기반 DPO | - |

### 4.3 항체 설계

#### ScFv 설계
| 모델명 | 링크 |
|--------|------|
| Germinal | - |
| IgGM | - |
| tFold System | - |
| MAGE | [Cell](https://www.cell.com/) |
| Chai-2 | [Chai Discovery](https://www.chaidiscovery.com/) |
| JAM-2 | - |
| Neo-1 | - |

#### VHH (나노바디) 설계
| 모델명 | 링크 |
|--------|------|
| Germinal | - |
| RFantiboy | [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.03.14.585103) |
| EvolveX | [Github](https://github.com/SantiagoMille/germinal) |
| mBER | [Github](https://github.com/manifoldbio/mber-open) |
| ODesign | [Github](https://github.com/The-Institute-for-AI-Molecular-Design/ODesign/tree/ODesign-antibody) |
| BoltzGen | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.11.20.689494v1)- |
| FoldCraft | - |
| Nanodesigner | - |
| GeoFlow-V2/V3 | - |
| nanoFOLD | - |

#### CDR 설계
| 모델명 | 링크 |
|--------|------|
| HalluDesign | [Github](https://github.com/MinchaoFang/HalluDesign) |
| UniMoMo | [ICML2025](https://openreview.net/pdf?id=KUN7A7Okb6) |
| MFDesign | [Github](https://github.com/yangnianzu0515/MFDesign)- |

#### 기타 항체 도구
| 모델명 | 링크 |
|--------|------|
| ALLM-Ab | - |
| AlphaBind | - |
| NanoBinder | - |
| TCR-TRANSLATE | - |

### 4.4 Binder 설계

#### 범용 Binder
| 모델명 | 링크 |
|--------|------|
| **RFdiffusion3** | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.09.18.676967) |
| HalluDesign | - |
| Protein Hunter | - |
| ODesign | - |
| BoltzGen | - |
| BoltzDesign1 | - |
| OriginFlow | - |
| Neo-1 | - |

#### 단백질 Binder
| 모델명 | 링크 |
|--------|------|
| **BindCraft** | [Nature](https://www.nature.com/articles/s41586-025-09429-6) / [GitHub](https://github.com/martinpacesa/BindCraft) |
| PXDesign | - |
| BinderFlow | - |
| UniMoMo | - |
| Prot42 | - |
| BindEnergyCraft | - |
| Mosaic (escalante-bio) | - |
| nf-binder-design | - |

### 4.5 효소 설계

| 모델명 | 설명 | 링크 |
|--------|------|------|
| **RFdiffusion3** | 전원자 효소 설계 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.09.18.676967) |
| **RFdiffusion2** | 효소 활성 부위 설계 | [Nature Methods](https://www.nature.com/articles/s41592-025-02975-x) |
| **Riff-Diff** | 촉매 모티프 기반 효소 설계 | [Nature](https://www.nature.com/articles/s41586-025-09747-9) |
| GeoEvoBuilder | - | - |
| AI.Enzymes | - | - |
| CATNIP | 생물촉매 반응 예측 | - |
| Pinal | - | - |

### 4.6 펩타이드 설계

| 모델명 | 링크 |
|--------|------|
| HalluDesign | - |
| CP-SDE | - |
| CP-Composer | - |
| RFpeptides | - |
| PepCCD | - |
| UniMoMo | - |
| NCFlow | - |
| EvoBind2 | - |
| EvoBindRare | - |
| KCM | - |
| PepMimic | - |
| MP-Designer | - |
| PepMLM | - |
| PepPrCLIP | - |
| duAb | - |
| HighMPNN | - |

### 4.7 기타 설계 도구

| 모델명 | 설명 | 링크 |
|--------|------|------|
| Proteína | - | - |
| La-Proteina | - | - |
| ProtComposer | - | - |
| PLAID | - | - |
| TopoDiff | 위상 기반 확산 | - |
| **SANDSTORM** | RNA 설계 | - |

---

## 5. AI 에이전트

| 에이전트 | 설명 | 링크 |
|----------|------|------|
| Nature Methods | 생명과학을 위한 AI 에이전트 | [Nature Methods](https://www.nature.com/nmeth/) |
| OriGene | - | - |
| Virtual Lab | 가상 실험실 에이전트 | - |
| CRISPR-GPT | 유전자 편집 AI 에이전트 | - |
| BioMni | - | - |
| STELLA | 단백질 기능 예측 | - |
| DrBioRight | - | - |
| PrimeGen | - | - |
| AgentD | - | - |
| Biomedical AI-Q | - | - |
| BiomedGPT | 바이오메디컬 GPT | - |
| MedGemma | 의료 Gemma | [Google](https://ai.google.dev/gemma) |
| NVIDIA AI-Q | NVIDIA 바이오 AI | [NVIDIA](https://www.nvidia.com/) |

---

## 6. 언어 모델

### 6.1 PLM (단백질 언어 모델)

| 모델명 | 설명 | 링크 |
|--------|------|------|
| Venus-MAXWELL | - | - |
| VenusFactory | - | - |
| **ESM3** | 멀티모달 단백질 언어 모델 | [GitHub](https://github.com/evolutionaryscale/esm) / [Science](https://www.science.org/doi/10.1126/science.ads0018) |
| **ProGen3** | 단백질 생성 모델 | - |
| **SaprotHub** | Saprot 모델 허브 | [GitHub](https://github.com/westlake-repl/SaprotHub) |
| PoET-2 | - | - |
| μFormer | - | - |
| DePLM | - | - |
| xTrimoPGLM | - | - |
| ProtBFN | - | - |
| AbBFN | 항체 BFN | - |
| LASE | - | - |
| Prot_EnT | - | - |
| PreTrek | - | - |
| EiRA | - | - |
| ProteinReasoner | - | - |
| MSA Pairformer | - | - |
| ProDVa | - | - |
| ProteinGPT | - | - |
| Prot42 | - | - |
| Pinal | - | - |
| PTM-Mamba | - | - |
| **InterPLM** | 해석 가능성 | - |

### 6.2 GLM (유전체 언어 모델)

| 모델명 | 설명 | 링크 |
|--------|------|------|
| **AlphaGenome** | 유전체 언어 모델 | [DeepMind](https://deepmind.google/) |
| **Evo2** | 진화 기반 유전체 모델 | [Arc Institute](https://arcinstitute.org/) |
| LucaOne | - | - |
| BioReason | - | - |
| CodonTransformer | 코돈 트랜스포머 | - |
| OmniReg-GPT | - | - |
| ProDMM | - | - |
| structRFM | - | - |
| mRNABERT | mRNA BERT | - |
| Exai-1 | - | - |
| **SegmentNT** | 세그먼트 주석 | - |

---

## 7. 구조 샘플링

| 모델명 | 설명 | 링크 |
|--------|------|------|
| **BioEmu** | 단백질 평형 앙상블 샘플링 | [Science](https://www.science.org/doi/10.1126/science.adv9817) / [GitHub](https://github.com/microsoft/bioemu) / [HuggingFace](https://huggingface.co/microsoft/bioemu) |
| CryoBoltz | Cryo-EM 기반 구조 | - |
| CryoPhold | - | - |
| PTraj-Diff | 궤적 확산 | - |
| AlphaFlex | 유연성 예측 | - |
| FunCLAN | - | - |
| RocketSHP | - | - |
| trRosettaX2-Dynamics | 동역학 예측 | - |
| AF2χ | - | - |
| ESMDiff | ESM 확산 | - |
| LD-FPG | - | - |
| FeNNix-Bio1 | - | - |
| DEERFold | - | - |
| **STARLING** | IDP 구조 샘플링 | - |

---

## 8. 기타 모델

### 친화력/PPI/결합 예측

| 모델명 | 설명 | 링크 |
|--------|------|------|
| STAB-DDG | 안정성 ΔΔG 예측 | - |
| **Boltz-2** | 결합 친화력 예측 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.06.14.659707) / [GitHub](https://github.com/jwohlwend/boltz) |
| Boltz-ABFE | 절대 결합 자유 에너지 | - |
| Boltz-2 NIM | NVIDIA 통합 모델 | - |
| SpatPPI | IDR 상호작용 | - |
| AlphaPPIMI | PPI 예측 | - |
| ProteomeLM | PPI 예측 | - |
| SWING | 단백질 상호작용 예측 | - |
| HPL | HLA-펩타이드 결합 예측 | - |
| DPAC | 단백질-DNA 결합 | - |
| Graphinity | 항원-항체 ΔΔG | - |
| PCANN | 언어 모델 결합 예측 | - |
| MPBind | 결합 부위 예측 | - |
| TRAP | TCR-pMHC 결합 예측 | - |
| diPaRIS | 단백질-RNA 상호작용 | - |
| Reformer | 단백질-RNA 상호작용 | - |
| SAKE-PP | 단백질 상호작용 | - |
| THLANet | TCR-pHLA 결합 | - |
| BindFlow | 단백질-리간드 친화력 | - |
| OmniBioTE | 단백질-핵산 친화력 | - |
| GerNA-Bind | RNA-리간드 특이성 | - |
| SuperMetal | 단백질-아연이온 결합 | - |
| ProAffinity++ | 단백질-단백질 친화력 | - |

### 효소 관련

| 모델명 | 설명 | 링크 |
|--------|------|------|
| VenusMine | 효소 발굴 | - |
| ProteinF3S | 효소 분류 예측 | - |
| EpHod | 효소 최적 pH 예측 | - |
| UniZyme | 효소 절단 부위 예측 | - |
| CatPred | 효소 동역학 파라미터 | - |
| CataPro | 효소 동역학 파라미터 | - |

### 펩타이드 관련

| 모델명 | 설명 | 링크 |
|--------|------|------|
| InstaNovo | 탈아미드화 펩타이드 예측 | - |
| RAPiDock | 단백질-펩타이드 도킹 | - |
| BindPred | 단백질-펩타이드 친화력 | - |
| moPepGen | 비정형 펩타이드 판별 | - |
| TransSAFP | *De novo* 자기조립 항균 펩타이드 | - |

### 데이터베이스

| 이름 | 설명 | 링크 |
|------|------|------|
| VenusPod | 단백질 서열 데이터셋 | - |
| VenusMutHub | 단백질 돌연변이 데이터셋 | - |
| MolGlueDB | 분자 접착제 데이터베이스 | - |
| ALL-conformations | CDR 구조 | - |

### 안정성 예측

| 모델명 | 설명 | 링크 |
|--------|------|------|
| ProStab | 단백질 안정성 ΔΔG | - |
| DVE-stability | 돌연변이 단백질 안정성 | - |

### 분자동역학 시뮬레이션

| 모델명 | 설명 | 링크 |
|--------|------|------|
| BAMBOO | 머신러닝 힘장 | - |
| MD-LLM-1 | MD용 대규모 모델 | - |

### 기능 예측

| 모델명 | 설명 | 링크 |
|--------|------|------|
| MKFGO | 단백질 기능 예측 | - |
| MSNGO | 단백질 기능 예측 | - |
| ProtHGT | 단백질 기능 예측 | - |
| Prot2Text-V2 | 단백질 기능 예측 | - |
| VENUSX | 단백질 기능 정밀 주석 | - |

### 구조/서열 검색

| 모델명 | 설명 | 링크 |
|--------|------|------|
| FAMSA2 | MSA 검색 | - |
| PreTrek | 구조 검색 | - |
| Foldseek-Multimer | 구조 검색 | [GitHub](https://github.com/steineggerlab/foldseek) |
| MMseqs2_GPU | GPU 가속 MSA 검색 | [GitHub](https://github.com/soedinglab/MMseqs2) |

### 구조 관련

| 모델명 | 설명 | 링크 |
|--------|------|------|
| AF3Score | 구조 점수 | - |
| ELEN | 단백질 루프 영역 점수 | - |
| ITsFlexible | 항체 CDR 유연성 예측 | - |
| FoldScript | 예측 구조 점수 도구 | - |
| ContrastQA | 단백질 Multimer 품질 평가 | - |
| actifpTM | AF2 구조 점수 메커니즘 수정 | - |

### 기타

| 모델명 | 설명 | 링크 |
|--------|------|------|
| Vina-CUDA | CUDA 가속 도킹 | - |
| DNA-Diffusion | DNA 확산 모델 | - |
| AlphaGEM | 대사 예측 | - |
| Helixer | 진핵생물 유전자 예측 | - |
| VenusVaccine | 면역원성 예측 | - |
| InstaNovo-P | 인산화 부위 예측 | - |
| ProDomino | 단백질 삽입 부위 예측 | - |
| ESMDance | 단백질 돌연변이 효과 예측 | - |
| BOLD-GPCRs | AI GPCR 표적 예측 | - |
| ImmunoMatch | 항체 H/L 사슬 매칭 예측 | - |
| ProProtein | MD 기반 단백질 유연성 예측 | - |

---

## 팔로우하기

**스스로를 갈고닦아, 모두를 즐겁게**

AI 단백질 관련 논문 해설 & 학술 속보 전문

Bilibili 영상 다시보기, 동일 계정명 **"AI4Protein"** 검색

---

*본 문서는 AI4Protein 2025 연말 정리를 한국어로 번역하고 주요 링크를 추가한 버전입니다.*
