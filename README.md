# Active Prelude to Calculus
Repository for the PreTeXt source for Active Prelude to Calculus.

Active Prelude to Calculus is available from https://www.activecalculus.org/prep. 

# quickstart instructions
1. Clone this repository.
1. Install the [PreTeXt-CLI](https://pypi.org/project/pretextbook/)
1. Execute `pretext generate webwork` to prepare the WeBWorK problems. (This
   step needs to be done any time you change a WeBWorK problem.)
1. Then execute `pretext build html`, `pretext view html`, `pretext build pdf`, `pretext
   build latex`. We suggest building the LaTeX and then building the
   PDF manually, as the CLI doesn't cycle through building the PDF
   enough times to get it right yet.
