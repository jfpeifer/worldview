**NOTE: This layer is undergoing beta testing.**

The dynamically generated Triangular Vegetation Index imagery layer is good for estimating green leaf area index (LAI), but its sensitivity to chlorophyll increases with an increase in canopy density.

It is calculated using:
`TVI = (120(NIR - Green) - 200(Red-Green)) / 2`

Specifically for Sentinel-2A and -2B:
`TVI = (120(Band 8A – Band 3) - 200(Band 4 - Band 3)) / 2`

The image is applied with a divergent blue-green to brown color palette. It depicts areas with a lot of green leaf growth, indicating the presence of chlorophyll, in dark green colors. Chlorophyll reflects more infrared light and less visible light. Areas with some green leaf growth are in light yellows, and areas with little to no vegetation growth are in shades of brown.

The Reflectance imagery layer from Sentinel-2A and Sentinel-2B/MSI product (S30) is available through the HLS project from the Multi-Spectral Instrument (MSI) aboard the European Union’s Copernicus Sentinel-2A and Sentinel-2B satellites. The sensor resolution is 10, 20, and 60 m, imagery resolution is resampled to 30 m, and the temporal resolution is daily with a 5 day revisit time. The imagery is available in Worldview/GIBS approximately 2 - 4 days after satellite overpass. There is a separate combined Landsat 8 and 9 imagery layer available.

This imagery layer is provided dynamically through the [NASA Interagency Implementation and Advanced Concepts Team (IMPACT)](https://earthdata.nasa.gov/esds/impact). As it is dynamically generated, it may take slightly longer to display than normal. The imagery is only available at higher zoom levels.

References: HLSS30 v002 [doi:10.5067/HLS/HLSS30.002](https://doi.org/10.5067/HLS/HLSS30.002)