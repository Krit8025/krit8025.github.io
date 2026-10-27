# Physics-Informed & Scale-Invariant Gearbox Fault Diagnosis
### Real-Time Predictive Maintenance Across Variable Operating Speeds and Multi-Setup Domain Shifts

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![Machine Learning](https://img.shields.io/badge/Algorithms-LightGBM%20%7C%20XGBoost-orange.svg)]()
[![Holdout Accuracy](https://img.shields.io/badge/Holdout%20Accuracy-96.09%25-brightgreen.svg)]()
[![Streaming Validation](https://img.shields.io/badge/Real--Time%20Streaming-98.46%25-success.svg)]()
[![Hardware](https://img.shields.io/badge/DAQ-NI%20cDAQ--9174-red.svg)]()
[![Validation Protocol](https://img.shields.io/badge/Validation-Leak--Free%20Block--Temporal-purple.svg)]()
[![License / IP](https://img.shields.io/badge/Access-Private%20Repository%20(Showcase%20Only)-lightgrey.svg)]()

---

## 1. Summary

This repository presents the architecture, methodology, and empirical benchmark results of a **physics-informed, scale-invariant fault diagnosis system** engineered for a **3-stage industrial reduction gearbox** (cumulative speed reduction ratio $\approx 1/48$).

The system continuously diagnoses localized component faults—including **bearing inner-race cracks across multiple transmission shafts** and **gear mesh defects (pinion missing tooth)**—under varying motor speeds ($5\text{--}20\text{ Hz}$ VFD) and varying mechanical mounting conditions.

### Key Performance Highlights:
* **8-Class Multi-Setup Holdout Test Accuracy**: **$96.09\%$** (LightGBM) / **$95.78\%$** (XGBoost) evaluated on **2,299 strictly unseen, embargoed test windows**.
* **Real-Time Streaming Verification Accuracy**: **$98.46\%$** evaluated on **2,789 live continuous streaming windows** collected from an independent physical setup.
* **Stage 2 Pinion Missing Tooth (`G2`)**: **$100.0\%$ Recall** and **$89.74\%$ Precision** ($F_1 = 0.9459$).
* **Bearing Inner-Race Crack Diagnosis (`B4`)**: Improved from **$0.00\%$** (catastrophic failure under amplitude drift) to **$100.0\%$ accuracy** using scale-invariant features.
* **False Alarm Rate on Healthy State (`H`)**: Suppressed to **$< 0.9\%$** across both harsh and quiet operational regimes.

---

## 2. Mechanical Domain Shift & Baseline Drift

In practical industrial condition monitoring, vibration signals collected from machinery rarely remain stationary over time:
1. **Structural Mounting & Preload Variation**: Sensor re-mounting, bolt torques, and structural damping alter accelerometer coupling stiffness and contact resonance. The machine's overall baseline vibration amplitude can drift by orders of magnitude without any change in fault severity.
2. **The "False Healthy" Trap**:
   * When trained on data from a stiff/harsh rig ($\text{RMS} \approx 0.30\text{--}1.20\text{ g}$), conventional machine learning models heavily rely on raw energy metrics (`RMS`, `Peak`, `Peak-to-Peak`).
   * When deployed to a well-damped or quieter rig ($\text{RMS} \approx 0.08\text{--}0.15\text{ g}$), the model encounters fault vibration amplitudes that fall well below the training rig's baseline noise floor.
   * **Consequence**: Traditional decision trees misroute severe fault conditions into the low-energy `Healthy` decision path, causing near-total diagnostic failure ($19.04\%$ overall accuracy, $0.00\%$ on Shaft 2 faults).
3. **Operational Speed Coupling**: Dynamic forces scale non-linearly with rotational velocity. Without explicit decoupling, classifiers risk mistaking high rotational speeds for severe machinery damage.

To solve these failure modes, this project used a Scale-Invariant & Drift-Resistant Feature Framework.

---

## 3. Description of the physical system.

The experimental testbed consists of a motor-driven **3-stage reduction gearbox** with 4 shafts, 8 rolling-element bearings, 3 driving pinions, and 3 driven gears:

### Component Distribution Across Transmission Shafts:
* **Shaft 1 (Input)**: Bearing 1 (`B1`), Bearing 2 (`B2`), Pinion 1 (`P1`, Stage 1 driver).
* **Shaft 2 (Intermediate 1)**: Bearing 3 (`B3`), Bearing 4 (`B4`), Gear 1 (`G1`, driven), Pinion 2 (`P2`, Stage 2 driver).
* **Shaft 3 (Intermediate 2)**: Bearing 5 (`B5`), Bearing 6 (`B6`), Gear 2 (`G2`, driven), Pinion 3 (`P3`, Stage 3 driver).
* **Shaft 4 (Output)**: Bearing 7 (`B7`), Bearing 8 (`B8`), Gear 3 (`G3`, final driven gear).

### Sensor Instrumentation ($F_s = 2000\text{ Hz}$):
Three vertical piezoelectric accelerometers are positioned along the primary transmission housing:
* **`AI0`**: Mounted on Shaft 2 Bearing **`B3`** housing.
* **`AI1`**: Mounted on Shaft 3 Bearing **`B5`** housing (Side A).
* **`AI2`**: Mounted on Shaft 3 Bearing **`B6`** housing (Side B, opposite side).

---

## 4. Physics-Informed Diagnostic Methodology

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 1. MATHEMATICAL SCALE INVARIANCE: f(α · x) = f(x)                                      │
│    All raw dimensional metrics (RMS, Peak, Peak-to-Peak) are banned. Retained metrics │
│    are dimensionless shape factors, spatial ratios, and normalized spectral moments.  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2. FOUR-PILLAR FEATURE SELECTION & DRIFT REGULARIZATION                                │
│    • Pillar 1: Inter-Class Separation (Mutual Information & ANOVA F-score)            │
│    • Pillar 2: Speed Decoupling (Speed Correlation Penalty |ρ_speed| < 0.20)     │
│    • Pillar 3: Cross-Setup Stability (Normalized Wasserstein Distance W1 < 1.10)       │
│    • Pillar 4: Redundancy Pruning (mRMR - Maximum Relevance Minimum Redundancy)        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3. LEAK-FREE BLOCK-TEMPORAL VALIDATION WITH EMBARGO GAPS                               │
│    Train/test splits are strictly partitioned by continuous operational time blocks   │
│    (75% train / 25% test) separated by a 5.0-second purged embargo gap to prevent     │
│    window-overlap signal leakage.                                                      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 4. MULTI-SETUP DUAL-REGIME DOMAIN TRAINING                                             │
│    Models are calibrated across both harsh and quiet mechanical setups (10,108         │
│    instances total), forcing trees to learn invariant decision boundaries.            │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### The 15 Optimal Scale-Invariant Features:
1. **Spatial Attenuation Ratios** (`ratio_rms_AI0_AI1`, `ratio_rms_AI0_AI2`): Measure vibration attenuation across transmission joints ($\frac{\alpha \text{RMS}_i}{\alpha \text{RMS}_j} = \frac{\text{RMS}_i}{\text{RMS}_j}$). Pinpoints which shaft the defect resides on without being misled by overall loudness.
2. **Normalized Sub-Band Energy Powers** (`AI0_pwr_low`, `AI0_pwr_mid`, `AI1_pwr_mid`, `AI0_pwr_high`, `AI1_pwr_high`): Fractional power concentrated in low rotational harmonics ($0\text{--}30\text{ Hz}$), gear meshing bands ($30\text{--}250\text{ Hz}$), and bearing ring resonance ($250\text{--}1000\text{ Hz}$).
3. **Spectral Mass & Dispersion** (`spec_centroid`, `spec_spread` across sensors): Invariant center of gravity and spectral variance of the power spectral density.
4. **Standardized Higher-Order Moments** (`AI0_skewness`, `AI1_skewness`, `AI2_skewness`): Third standardized moment capturing directional impact asymmetry and torque relief caused by gear tooth damage and bearing raceway spalling.

---

## 5. Benchmark Performance & Results

### 5.1 Multi-Setup Holdout Test Benchmark (8 Classes, 2,299 Unseen Windows)
Evaluated on strictly independent holdout time blocks across both setups:

| Metric | LightGBM | XGBoost | Baseline (Old Setup 1 Model) |
|---|:---:|:---:|:---:|
| **Holdout Test Accuracy** | **96.09%** | **95.78%** | *Failed on Cross-Setup Deployment* |
| **Macro F1-Score** | **0.9577** | **0.9545** | — |
| **Weighted F1-Score** | **0.9609** | **0.9579** | — |
| **Cohen’s Kappa ($\kappa$)** | **0.9549** | **0.9514** | — |

#### Per-Class Holdout Performance:
| Class ID | Condition | Component Description | Precision | Recall | F1-Score | Support |
|:---:|:---:|---|:---:|:---:|:---:|:---:|
| **`H`** | Healthy | Baseline Un-faulted State | 98.27% | 98.27% | 0.9827 | 346 |
| **`B1`** | Bearing Defect | Shaft 1 Motor-Side Bearing IR Crack | 93.85% | 87.56% | 0.9059 | 209 |
| **`B2`** | Bearing Defect | Shaft 1 Pinion-Side Bearing IR Crack | 87.97% | 96.60% | 0.9209 | 265 |
| **`B3`** | Bearing Defect | Shaft 2 Sensor AI0 Bearing IR Crack | 99.68% | 89.74% | 0.9445 | 351 |
| **`B4`** | Bearing Defect | Shaft 2 Opposite Bearing IR Crack | 97.23% | 96.64% | 0.9693 | 327 |
| **`B5`** | Bearing Defect | Shaft 3 Sensor AI1 Bearing IR Crack | 99.48% | 99.48% | 0.9948 | 383 |
| **`B6`** | Bearing Defect | Shaft 3 Sensor AI2 Bearing IR Crack | 99.52% | 100.00% | 0.9976 | 208 |
| **`G2`** | **Gear Defect** | **Stage 2 Pinion Missing Tooth** | **89.74%** | **100.00%** | **0.9459** | **210** |

---

### 5.2 Real-Time Streaming Verification (2,789 Windows)
Evaluated directly on live continuous streaming acquisitions collected under the quieter rig condition:

| Fault State | Real-Time Windows | Old Setup-1 Model Correct | Current Scale-Invariant Model Correct | Diagnostic Verdict |
|:---:|:---:|:---:|:---:|---|
| **`B4`** | 537 | **0 (0.00% - 100% false Healthy)** | **537 (100.0%)** | **Catastrophic failure completely eliminated** |
| **`B2`** | 291 | 78 (26.8%) | **291 (100.0%)** | Zero confusion with adjacent bearings |
| **`B5`** | 750 | 0 (0.00% - 80% false Healthy) | **747 (99.60%)** | High-precision isolation on Shaft 3 |
| **`H`** | 561 | 453 (80.7%) | **556 (99.11%)** | Healthy state accurately preserved |
| **`B3`** | 650 | 0 (0.00% - 70% false Healthy) | **615 (94.62%)** | Shaft 2 housing localized accurately |
| **Total** | **2,789** | **531 (19.04%)** | **2,746 (98.46%)** | **+79.42% overall transferability gain** |

---

## 6. Visual Performance & Interpretability

### Figure 1: Confusion Matrix Comparison (Failure vs. Resolution)
![Confusion Matrix Comparison](images/confusion_matrices_comparison.png)
* **Left Panel**: Setup-1 model failing during real-time streaming ($19.04\%$ accuracy; $100\%$ of `B4` diverted into `H`).
* **Right Panel**: Current scale-invariant model on the multi-setup 8-class holdout test ($96.09\%$ accuracy; `G2` = $100\%$, `B6` = $100\%$, `B4` = $96.6\%$).

---

### Figure 2: Physics-Based Feature Importance Ranking (Tree Gain %)
![Feature Importance Ranking](images/feature_importance_ranking.png)
* **Spatial Ratios (`ratio_rms_AI0_AI1`, `ratio_rms_AI0_AI2`)** provide over **$46\%$** of all classification gain, establishing structural spatial localization along the transmission path.
* **Spectral Mass & Band Power (`spec_centroid`, `pwr_low`, `pwr_mid`, `pwr_high`)** provide **$47\%$** of gain, separating gear mesh dynamics from bearing impact ring-down.
* **Waveform Asymmetry (`skewness`)** provides the remaining critical gain to isolate unidirectional impact shocks.


## 7. Repository Notice & Confidentiality

> **Notice**:  
> This public repository serves as a **technical showcase and research summary** of the multi-stage gearbox fault diagnosis methodology.  
> 
> To protect proprietary research intellectual property and ongoing industrial collaboration agreements:
> * The complete source code (feature engineering algorithms, acquisition routines, streaming pipelines, and training harnesses) is maintained in a **private repository**.
> * Raw vibration dataset CSV files are **not publicly hosted**.

