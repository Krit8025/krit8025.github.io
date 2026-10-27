# Overview

Blade Element Momentum Theory (BEMT) has been implemented with modifications for shrouded propellers with a simple analytical model to study the effects of the shroud on the rotor performance. This formulation integrates the theory and assumptions of Krishna et al. [1] with the BEMT formulation of Ning [2] to obtain a robust and efficient BEMT algorithm applicable to a shrouded propeller, involving a single residual function for guaranteed convergence, proving useful for actuator disk models and optimization.

## Validation and Results

The BEMT algorithm was validated against the baseline open rotor cases for APC 8x6 E propellers to verify the open rotor performance prediction.

| Figure 4: Thrust Coefficient ($C_T$) Comparison | Figure 5: Power Coefficient ($C_P$) Comparison |
| :---: | :---: |
| ![Figure 4: Validation of the framework for a non-shrouded rotor CT](figure4.png) | ![Figure 5: Validation of the framework for a non-shrouded rotor CP](figure5.png) |

The shrouded BEMT modifications were then validated against experimental data from a NASA TN D-4142 ducted fan as well as against in-house experiments using a custom shrouded rotor (IITH Rotor).

| Figure 6: Thrust Coefficient ($C_T$) Comparison | Figure 7: Power Coefficient ($C_P$) Comparison |
| :---: | :---: |
| ![Figure 6: Validation of the framework for a shrouded rotor CT](figure6.png) | ![Figure 7: Validation of the framework for a shrouded rotor CP](figure7.png) |

| Figure 10: Total Thrust vs. Rotational Speed (RPM) |
| :---: |
| ![Figure 10: Validation of the framework for a shrouded rotor - IITH Ducted Rotor](figure10.png) |

Across all advance ratios, the baseline model shows close agreement with experimental data, obtaining an RMSE of 0.0122 for $C_T$ and 0.0137 for $C_P$ on the APC 8x6 propeller. For shrouded configurations, the proposed modifications significantly improve accuracy, achieving a 15.8% reduction in $C_T$ error for the NASA-4142 ducted fan and a 58.6% reduction in thrust error for the IITH custom shrouded rotor.

### Table 1: Error metrics for predicting thrust: open rotor model vs. current (shrouded) model

| Case | Metric | Open rotor | Current | Reduction |
| :--- | :--- | :---: | :---: | :---: |
| **NASA 4142 ($C_T$)** | RMSE | 0.0582 | 0.0490 | 15.8% |
| | MAE | 0.0518 | 0.0475 | 8.3% |
| **IITH rotor ($T$ [N])** | RMSE | 1.8555 | 0.7676 | 58.6% |
| | MAE | 1.4196 | 0.6795 | 52.1% |

## References


- **[1]** S. Gummekeri Krishna et al. *Aerodynamic force modelling of free and shrouded propellers.* In Proceedings of ASME Turbo Expo 2025: Turbomachinery Technical Conference and Exposition, 2025. GT2025-152175.
-  **[2]** A. Ning. *Using blade element momentum methods with gradient-based design optimization.* Structural and Multidisciplinary Optimization, 64:188, 2021.
- **[3]** K. W. Mort and B. Gamse. *A wind-tunnel investigation of a 7-foot-diameter ducted propeller.* Technical Note D-4142, NASA, 1967.

Source code and data is made private and would be considered for sharing upon request.

