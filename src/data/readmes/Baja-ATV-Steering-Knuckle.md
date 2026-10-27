# Front Steering Knuckle: Design, Analysis and Manufacturing
**Team Vulcan (SAE BPHC) — Baja ATV**

This document is a brief report of the kinematics, structural analysis, prototyping, and manufacturing of a front steering knuckle for a Baja ATV as part of Team Vulcan (SAE BPHC). This component represents the first in-house machined knuckle in Team Vulcan's history.

---

## 1. Kinematics & Prior Suspension Shortcomings

The front suspension kinematics were analyzed and redesigned using **Lotus Shark Suspension Analysis** software to satisfy targeted vehicle dynamics and packaging constraints. A Short-Long Arm (SLA) double-wishbone geometry was selected to prioritize negative camber gain in roll, maximizing tire contact patch and lateral grip.

### Identified Flaws in the Previous year's design:
* **Anti-Ackermann Steering:** The previous steering arm was located ahead of the axle line, forcing anti-Ackermann geometry and causing excessive tire scrub during cornering.
* **Half-Axle Packaging Conflicts:** Inadequate allowance for the half-shafts while change of track width led to loss of drive transmission during extreme bump and rebound.
* **Restricted Suspension Travel:** The static shock absorber length was positioned too close to full extension, severely limiting available rebound travel.

> [!NOTE]
> Detailed kinematic coordinate models and simulation results are documented in the accompanying [`LSA/SDF-Results-front.sdf`](LSA/SDF-Results-front.sdf) file.

![Lotus Shark Front Suspension Kinematics](images/Front-suspension.png)

---

## 2. Design & Structural Analysis

The knuckle was designed primarily to enable **first-time in-house CNC milling**, demanding a simplified geometry machinable with standard cutting tools and minimal fixture repositioning.

An iterative CAD-to-FEA workflow was used to get an optimal strength-to-weight balance:
* **Critical Load Case:** 5-foot vertical vehicle drop landing simultaneously on all four wheels. Wheel-center impact forces were calculated from total impact energy absorbed across full shock absorber compression travel.
* **Boundary Conditions:** Fixed supports applied at the upper and lower control arm ball-joint pivots, with the calculated impact load applied as a remote force at the wheel center.
* Geometry was iteratively designed until factor-of-safety (FOS) and stress distribution met target requirements.

![Knuckle CAD Model](images/cad-knuckle.png)

---

## 3. Prototyping & Manufacturing

### FDM 3D Prototyping
Physical packaging, half-axle clearances, and tool accessibility were first verified through rapid FDM 3D printing before cutting metal.

| Last year's prototype for reference. | New Design Prototype |
| :---: | :---: |
| ![Previous 3D Printed Knuckle](images/old-3dPrint.jpeg) | ![New 3D Printed Knuckle](images/new_3dPrint.jpeg) |

### CNC Machining & DFM
* **Tooling:** Fillet radii, internal pocket corners, and depths of cut were adapted to match standard end mills available in the workshop.
* **Setup Minimization:** The part was machined in just **2 setups** (front and rear operations)—the practical minimum which was required for any knuckle design.
* **Material Selection:** A proof-of-concept prototype was successfully machined in commercial-grade aluminum. Final competition units will be machined from Al 6065.
The final machined part is given below:

![Aluminium Machined Part](images/machined.jpeg)
---

## 4. Outcomes

* **Corrected Steering Kinematics:** Transitioned to positive Ackermann geometry, eliminating tire scrub during cornering.
* **Extended Travel & Reliability:** Restored full rebound travel and resolved half-axle packaging issues, preventing transmission disengagement.
* **25% Mass Reduction:** Reduced weight by 220 g (final weight: 550 g) compared to last year's design while maintaining equivalent drop-impact strength.
* **Simplified CNC Manufacturing:** Streamlined geometry to only 2 setups using standard tooling.
* **In-House Competency & Cost Savings:** Established the team's first in-house knuckle machining capability, saving approx ₹10,000 per part for future designs.

---

## 5. Future Improvements

* **Topology Optimization:** Map structural load paths to strategically remove non-critical material and minimize mass.
* **Structural Riblets:** Integrate internal ribbing to shed additional weight while preserving structural rigidity.
* **Multibody Dynamics (MBD):** Simulate dynamic loads across the complete front suspension assembly rather than evaluating components (hub, knuckle, arms) individually.
* **Material Upgrade:** Machine final competition units from Al 6065 alloy (upgrading from the commercial-grade aluminum prototype).

## 6. Acknowledgements
* Makerspace and Prototyping facility - BPHC:  CNC Milling facility
* Team Vulcan, SAE BPHC
