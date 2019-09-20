// Storing data
var birdsArray = [
  {
    name: "Acorn Woodpecker",
    photo: "./public/img/acorn-woodpecker.jpg"
  },
  {
    name: "American Avocet",
    photo: "./public/img/american-avocet.jpg"
  },
  {
    name: "American Bittern",
    photo: "./public/img/american-bittern.jpg"
  },
  {
    name: "American Coot",
    photo: "./public/img/american-coot.jpg"
  },
  {
    name: "American Crow",
    photo: "./public/img/american-crow.jpg"
  },
  {
    name: "American Dipper",
    photo: "./public/img/american-dipper.jpg"
  },
  {
    name: "American Goldfinch",
    photo: "./public/img/american-goldfinch.jpg"
  },
  {
    name: "American Kestrel",
    photo: "./public/img/american-kestrel.jpg"
  },
  {
    name: "American Pipit",
    photo: "./public/img/american-pipit.jpg"
  },
  {
    name: "American Robin",
    photo: "./public/img/american-robin.jpg"
  },
  {
    name: "American White Pelican",
    photo: "./public/img/american-white-pelican.jpg"
  },
  {
    name: "American Wigeon",
    photo: "./public/img/american-wigeon.jpg"
  },
  {
    name: "Ash-throated Flycatcher",
    photo: "./public/img/ash-throated-flycatcher.jpg"
  },
  {
    name: "Baird's Sandpiper",
    photo: "./public/img/bairds-sandpiper.jpg"
  },
  {
    name: "Bald Eagle",
    photo: "./public/img/bald-eagle.jpg"
  },
  {
    name: "Band-tailed Pigeon",
    photo: "./public/img/band-tailed-pigeon.jpg"
  },
  {
    name: "Bank Swallow",
    photo: "./public/img/bank-swallow.jpg"
  },
  {
    name: "Barn Owl",
    photo: "./public/img/barn-owl.jpg"
  },
  {
    name: "Barn Swallow",
    photo: "./public/img/barn-swallow.jpg"
  },
  {
    name: "Barred Owl",
    photo: "./public/img/barred-owl.jpg"
  },
  {
    name: "Barrow's Goldeneye",
    photo: "./public/img/barrows-goldeneye.jpg"
  },
  {
    name: "Belted Kingfisher",
    photo: "./public/img/belted-kingfisher.jpg"
  },
  {
    name: "Bewick's Wren",
    photo: "./public/img/bewicks-wren.jpg"
  },
  {
    name: "Black-backed Woodpecker",
    photo: "./public/img/black-backed-woodpecker.jpg"
  },
  {
    name: "Black-bellied Plover",
    photo: "./public/img/black-bellied-plover.jpg"
  },
  {
    name: "Black-billed Magpie",
    photo: "./public/img/black-billed-magpie.jpg"
  },
  {
    name: "Black-capped Chickadee",
    photo: "./public/img/black-capped-chickadee.jpg"
  },
  {
    name: "Black-chinned Hummingbird",
    photo: "./public/img/black-chinned-hummingbird.jpg"
  },
  {
    name: "Black-crowned Night-Herron", //* Could the user possibly use other ways of entering name? Black crowned night herron*//
    photo: "./public/img/black-crowned-night-herron.jpg"
  },
  {
    name: "Black-footed Albatross",
    photo: "./public/img/black-footed-albatross.jpg"
  },
  {
    name: "Black-headed Grosbeak",
    photo: "./public/img/black-headed Grosbeak.jpg"
  },
  {
    name: "Black-necked Stilt",
    photo: "./public/img/black-necked-stilt.jpg"
  },
  {
    name: "Black-oystercatcher",
    photo: "./public/img/black-oystercatcher.jpg"
  },
  {
    name: "Black Scoter",
    photo: "./public/img/black-scoter.jpg"
  },
  {
    name: "Black Tern",
    photo: "./public/img/black-tern.jpg"
  },
  {
    name: "Black-bellied Plover",
    photo: "./public/img/black-bellied-plover.jpg"
  },
  {
    name: "Black-thoated Gray Warbler",
    photo: "./public/img/black-throated-gray-warbler.jpg"
  },
  {
    name: "Black Turnstone",
    photo: "./public/img/black-turnstone.jpg"
  },
  {
    name: "Blue Grouse",
    photo: "./public/img/blue-grouse.jpg"
  },
  {
    name: "Blue-winged Teal",
    photo: "./public/img/blue-winged-teal.jpg"
  },
  {
    name: "Bohemian Waxwing",
    photo: "./public/img/bohemian-waxwing.jpg"
  },
  {
    name: "Bonapartes Gull",
    photo: "./public/img/bonapartes-gull.jpg"
  },
  {
    name: "Brandt's Cormorant",
    photo: "./public/img/brandts-cormorant.jpg"
  },
  {
    name: "Brant",
    photo: "./public/img/brant.jpg"
  },
  {
    name: "Brewer's Blackbird",
    photo: "./public/img/brewers-blackbird.jpg"
  },
  {
    name: "Brewer's Sparrow",
    photo: "./public/img/brewers-sparrow.jpg"
  },
  {
    name: "Brown Creeper",
    photo: "./public/img/brown-creeper.jpg"
  },
  {
    name: "Brown-headed Cowbird",
    photo: "./public/img/brown-headed-cowbird.jpg"
  },
  {
    name: "Brown Pelican",
    photo: "./public/img/brown-pelican.jpg"
  },
  {
    name: "Bufflehead",
    photo: "./public/img/bufflehead.jpg"
  },
  {
    name: "Bullock's Oriole",
    photo: "./public/img/bullocks-oriole.jpg"
  },
  {
    name: "Burrowing Owl",
    photo: "./public/img/burrowing-owl.jpg"
  },
  {
    name: "Bushtit",
    photo: "./public/img/bushtit.jpg"
  },
  {
    name: "California Gull",
    photo: "./public/img/california-gull.jpg"
  },
  {
    name: "California Quail",
    photo: "./public/img/california-quail.jpg"
  },
  {
    name: "Calliope Hummingbird",
    photo: "./public/img/calliope-hummingbird.jpg"
  },
  {
    name: "Canada Goose",
    photo: "./public/img/canada-goose.jpg"
  },
  {
    name: "Canvasback",
    photo: "./public/img/canvasback.jpg"
  },
  {
    name: "Caspian Tern",
    photo: "./public/img/caspian-tern.jpg"
  },
  {
    name: "Cassin's Auklet",
    photo: "./public/img/cassins-auklet.jpg"
  },
  {
    name: "Cassin's Finch",
    photo: "./public/img/cassins-finch.jpg"
  },
  {
    name: "Cedar Waxwing",
    photo: "./public/img/cedar-waxwing.jpg"
  },
  {
    name: "Chestnut-backed Chickadee",
    photo: "./public/img/chestnut-backed-chickadee.jpg"
  },
  {
    name: "Chipping Sarrow",
    photo: "./public/img/chipping-sparrow.jpg"
  },
  {
    name: "Chukar",
    photo: "./public/img/chukar.jpg"
  },
  {
    name: "Cinnamon Teal",
    photo: "./public/img/cinnamon-teal.jpg"
  },
  {
    name: "Clark's Nutcracker",
    photo: "./public/img/clarks-nutcracker.jpg"
  },
  {
    name: "Cliff Swallow",
    photo: "./public/img/cliff-swallow.jpg"
  },
  {
    name: "Common Goldeneye",
    photo: "./public/img/common-goldeneye.jpg"
  },
  {
    name: "Common Loon",
    photo: "./public/img/common-loon.jpg"
  },
  {
    name: "Common Merganser",
    photo: "./public/img/common-merganser.jpg"
  },
  {
    name: "Common Murre",
    photo: "./public/img/common-murre.jpg"
  },
  {
    name: "Common Nighthawk",
    photo: "./public/img/common-nighthawk.jpg"
  },
  {
    name: "Common Raven",
    photo: "./public/img/common-raven.jpg"
  },
  {
    name: "Common Snipe",
    photo: "./public/img/common-snipe.jpg"
  },
  {
    name: "Common Tern",
    photo: "./public/img/common-tern.jpg"
  },
  {
    name: "Common Yellowthroat",
    photo: "./public/img/common-yellowthroat.jpg"
  },
  {
    name: "Cooper's Hawk",
    photo: "./public/img/coopers-hawk.jpg"
  },
  {
    name: "Dark-eyed Junco",
    photo: "./public/img/dark-eyed-junco.jpg"
  },
  {
    name: "Double-crested Cormorant",
    photo: "./public/img/double-crested-cormorant.jpg"
  },
  {
    name: "Downy Woodpecker",
    photo: "./public/img/downy-woodpecker.jpg"
  },
  {
    name: "Dunlin",
    photo: "./public/img/dunlin.jpg"
  },
  {
    name: "Eared Grebe",
    photo: "./public/img/eared-grebe.jpg"
  },
  {
    name: "European Starling",
    photo: "./public/img/european-starling.jpg"
  },
  {
    name: "Evening Grosbeak",
    photo: "./public/img/evening-grosbeak.jpg"
  },
  {
    name: "Foster's Tern",
    photo: "./public/img/foster-tern.jpg"
  },
  {
    name: "Fox Sparrow",
    photo: "./public/img/fox-sparrow.jpg"
  },
  {
    name: "Gadwall",
    photo: "./public/img/gadwall.jpg"
  },
  {
    name: "Glaucous-winged Gull",
    photo: "./public/img/glaucous-winged-gull.jpg"
  },
  {
    name: "Golden-crowned Kinglet",
    photo: "./public/img/golden-crowned-kinglet.jpg"
  },
  {
    name: "Golden-crowned Sparrow",
    photo: "./public/img/golden-crowned-sparrow.jpg"
  },
  {
    name: "Golden Eagle",
    photo: "./public/img/golden-eagle.jpg"
  },
  {
    name: "Gray Catbird",
    photo: "./public/img/gray-catbird.jpg"
  },
  {
    name: "Gray-crowned Rosy-Finch",
    photo: "./public/img/gray-crowned-rosy-finch.jpg"
  },
  {
    name: "Gray Jay",
    photo: "./public/img/gray-jay.jpg"
  },
  {
    name: "Great Blue Herron",
    photo: "./public/img/great-blue-herron.jpg"
  },
  {
    name: "Great Egret",
    photo: "./public/img/great-egret.jpg"
  },
  {
    name: "Greater White-fronted Goose",
    photo: "./public/img/greater-white-fronted-goose.jpg"
  },
  {
    name: "Greater Yellowlegs",
    photo: "./public/img/greater-yellowlegs.jpg"
  },
  {
    name: "Greater Horned Owl",
    photo: "./public/img/greater-horned-owl.jpg"
  },
  {
    name: "Grebe",
    photo: "./public/img/grebe.jpg"
  },
  {
    name: "Green Heron",
    photo: "./public/img/green-heron.jpg"
  },
  {
    name: "Green-tailed Towhee",
    photo: "./public/img/green-tailed-towhee.jpg"
  },
  {
    name: "Green-winged Teal",
    photo: "./public/img/green-winged-teal.jpg"
  },
  {
    name: "Hairy Woodpecker",
    photo: "./public/img/hairy-woodpecker.jpg"
  },
  {
    name: "Hammond's Flycatcher",
    photo: "./public/img/hammonds-flycatcher.jpg"
  },
  {
    name: "Harlequin Duck",
    photo: "./public/img/harlequin-duck.jpg"
  },
  {
    name: "Heermanns Gull",
    photo: "./public/img/heermanns-gull.jpg"
  },
  {
    name: "Hermit-Thrush",
    photo: "./public/img/hermit-thrush.jpg"
  },
  {
    name: "Hermit Warbler",
    photo: "./public/img/hermit-warbler.jpg"
  },
  {
    name: "Hooded Merganser",
    photo: "./public/img/greater-white-fronted-goose.jpg"
  },
  {
    name: "Horned Grebe",
    photo: "./public/img/horned-grebe.jpg"
  },
  {
    name: "Horned Lark",
    photo: "./public/img/horned-lark.jpg"
  },
  {
    name: "House Finch",
    photo: "./public/img/house-finch.jpg"
  },
  {
    name: "House Sparrow",
    photo: "./public/img/house-sparrow.jpg"
  },
  {
    name: "House Wren",
    photo: "./public/img/house-wren.jpg"
  },
  {
    name: "Hutton's Vireo",
    photo: "./public/img/huttons-vireo.jpg"
  },
  {
    name: "Killdeer",
    photo: "./public/img/killdear.jpg"
  },
  {
    name: "Lark Sparrow",
    photo: "./public/img/lark-sparrow.jpg"
  },
  {
    name: "Lazuli Bunting",
    photo: "./public/img/lazuli-bunting.jpg"
  },
  {
    name: "Least Sandpiper",
    photo: "./public/img/least-sandpiper.jpg"
  },
  {
    name: "Lesser Scaup",
    photo: "./public/img/lesser-scaup.jpg"
  },
  {
    name: "Lesser Yellowlegs",
    photo: "./public/img/lesser-yellowlegs.jpg"
  },
  {
    name: "Lewis's Woodpecker",
    photo: "./public/img/lewiss-woodpecker.jpg"
  },
  {
    name: "Lincoln's Sparrow",
    photo: "./public/img/lincolns-sparrow.jpg"
  },
  {
    name: "Long-billed Curlew",
    photo: "./public/img/long-billed-curlew.jpg"
  },
  {
    name: "Long-eared Owl",
    photo: "./public/img/long-eared-owl.jpg"
  },
  {
    name: "Loon",
    photo: "./public/img/loon.jpg"
  },
  {
    name: "Macgillivray's Warbler",
    photo: "./public/img/macgillivrays-warbler.jpg"
  },
  {
    name: "Mallard",
    photo: "./public/img/mallard.jpg"
  },
  {
    name: "Marbled Godwit",
    photo: "./public/img/huttons-viro.jpg"
  },
  {
    name: "Marbled Murrelet",
    photo: "./public/img/marbled-murrelet.jpg"
  },
  {
    name: "Marsh Wren",
    photo: "./public/img/marsh-wren.jpg"
  },
  {
    name: "Merlin",
    photo: "./public/img/merlin.jpg"
  },
  {
    name: "Mew Gull",
    photo: "./public/img/mew-gull.jpg"
  },
  {
    name: "Mountain Bluebird",
    photo: "./public/img/mountain-bluebird.jpg"
  },
  {
    name: "Mountain Chickadee",
    photo: "./public/img/mountain-chickadee.jpg"
  },
  {
    name: "Mountain Quail",
    photo: "./public/img/mountain-quail.jpg"
  },
  {
    name: "Mourning Dove",
    photo: "./public/img/mourning-dove.jpg"
  },
  {
    name: "Nashville Warbler",
    photo: "./public/img/nashville-warbler.jpg"
  },
  {
    name: "Northern Flicker",
    photo: "./public/img/northern-flicker.jpg"
  },
  {
    name: "Northern Goshawk",
    photo: "./public/img/northern-goshawk.jpg"
  },
  {
    name: "Northern Harrier",
    photo: "./public/img/northern-harrier.jpg"
  },
  {
    name: "Northern Pintail",
    photo: "./public/img/northern-pintail.jpg"
  },
  {
    name: "Northern Pygmy-Owl",
    photo: "./public/img/northern-pygmy-owl.jpg"
  },
  {
    name: "Northern Rough-winged Swallow",
    photo: "./public/img/northern-rough-winged-swallow.jpg"
  },
  {
    name: "Northern Shoveler",
    photo: "./public/img/northern-shoveler.jpg"
  },
  {
    name: "Northern Shrike",
    photo: "./public/img/northern-shrike.jpg"
  },
  {
    name: "Old Squaw",
    photo: "./public/img/old-squaw.jpg"
  },
  {
    name: "Orange-crowned Warbler",
    photo: "./public/img/orange-crowned-warbler.jpg"
  },
  {
    name: "Osprey",
    photo: "./public/img/osprey.jpg"
  },
  {
    name: "Pacific Loon",
    photo: "./public/img/pacific-loon.jpg"
  },
  {
    name: "Pacific Slope Flycatcher",
    photo: "./public/img/pacific-slope-flycatcher.jpg"
  },
  {
    name: "Parasitic Jaeger",
    photo: "./public/img/parasitic-jaeger.jpg"
  },
  {
    name: "Pelagic Cormorant",
    photo: "./public/img/pelagic-cormorant.jpg"
  },
  {
    name: "Peregrine Falcon",
    photo: "./public/img/peregrine-falcon.jpg"
  },
  {
    name: "Pied-billed Grebe",
    photo: "./public/img/pied-billed-grebe.jpg"
  },
  {
    name: "Pigeon Guillemot",
    photo: "./public/img/pigeon-guillemot.jpg"
  },
  {
    name: "Pileated Woodpecker",
    photo: "./public/img/pigeon-guillemot.jpg"
  },
  {
    name: "Pine Grosbeak",
    photo: "./public/img/pine-grosbeak.jpg"
  },
  {
    name: "Pine Siskin",
    photo: "./public/img/pine-siskin.jpg"
  },
  {
    name: "Pink-footed Shearwater",
    photo: "./public/img/pink-footed-shearwater.jpg"
  },
  {
    name: "Prairie Falcon",
    photo: "./public/img/prairie-falcon.jpg"
  },
  {
    name: "Purple Finch",
    photo: "./public/img/purple-finch.jpg"
  },
  {
    name: "Pygmy Nuthatch",
    photo: "./public/img/pygmy-nuthatch.jpg"
  },
  {
    name: "Red-breasted Merganser",
    photo: "./public/img/red-breasted-merganser.jpg"
  },
  {
    name: "Red-breasted Nuthatch",
    photo: "./public/img/red-breasted-nuthatch.jpg"
  },
  {
    name: "Red-breasted Sapsucker",
    photo: "./public/img/red-breasted-sapsucker.jpg"
  },
  {
    name: "Red Crossbill",
    photo: "./public/img/red-crossbill.jpg"
  },
  {
    name: "Red-eyed Vireo",
    photo: "./public/img/red-eyed-vireo.jpg"
  },
  {
    name: "Redhead",
    photo: "./public/img/redhead.jpg"
  },
  {
    name: "Red Knot",
    photo: "./public/img/red-knot.jpg"
  },
  {
    name: "Red-naped Sapsucker",
    photo: "./public/img/red-naped-sapsucker.jpg"
  },
  {
    name: "Red-necked Grebe",
    photo: "./public/img/red-necked-grebe.jpg"
  },
  {
    name: "Red-necked Phalarope ",
    photo: "./public/img/red-necked-phalarope.jpg"
  },
  {
    name: "Red-tailed Hawk",
    photo: "./public/img/red-tailed-hawk.jpg"
  },
  {
    name: "Red-throated Loon",
    photo: "./public/img/red-throated-loon.jpg"
  },
  {
    name: "Red-winged Blackbird",
    photo: "./public/img/red-winged-blackbird.jpg"
  },
  {
    name: "Rhinoceros Auklet",
    photo: "./public/img/rhinoceros-auklet.jpg"
  },
  {
    name: "Ring-billed Gull",
    photo: "./public/img/ring-billed-gull.jpg"
  },
  {
    name: "Ring-necked Duck",
    photo: "./public/img/ring-necked-duck.jpg"
  },
  {
    name: "Ring-necked Pheasant",
    photo: "./public/img/ring-necked-pheasant.jpg"
  },
  {
    name: "Rock Dove",
    photo: "./public/img/rock-dove.jpg"
  },
  {
    name: "Rock Sandpiper",
    photo: "./public/img/rock-sandpiper.jpg"
  },
  {
    name: "Rock Wren",
    photo: "./public/img/rock-wren.jpg"
  },
  {
    name: "Rough-legged Hawk",
    photo: "./public/img/rough-legged-hawk.jpg"
  },
  {
    name: "Ruby-crowned Kinglet",
    photo: "./public/img/ruby-crowned-kinglet.jpg"
  },
  {
    name: "Ruddy Duck",
    photo: "./public/img/ruddy-duck.jpg"
  },
  {
    name: "Ruddy Turnstone",
    photo: "./public/img/ruddy-turnstone.jpg"
  },
  {
    name: "Ruffled Grouse",
    photo: "./public/img/ruffled-grouse.jpg"
  },
  {
    name: "Rufous Hummingbird",
    photo: "./public/img/rufous-hummingbird.jpg"
  },
  {
    name: "Sage Grouse",
    photo: "./public/img/sage-grouse.jpg"
  },
  {
    name: "Sage Sparrow",
    photo: "./public/img/sage-sparrow.jpg"
  },
  {
    name: "Sanderling",
    photo: "./public/img/sanderling.jpg"
  },
  {
    name: "Sandhill Crane",
    photo: "./public/img/sandhill-crane.jpg"
  },
  {
    name: "Savannah Sparrow",
    photo: "./public/img/savannah-sparrow.jpg"
  },
  {
    name: "Say's Phoebe",
    photo: "./public/img/says-phoebe.jpg"
  },
  {
    name: "Semipalmated Plover",
    photo: "./public/img/semipalmated-plover.jpg"
  },
  {
    name: "Sharp-shinned Hawk",
    photo: "./public/img/sharp-shinned-hawk.jpg"
  },
  {
    name: "Short-billed Dowitcher",
    photo: "./public/img/short-billed-dowitcher.jpg"
  },
  {
    name: "Short-eared Owl",
    photo: "./public/img/short-eared-owl.jpg"
  },
  {
    name: "Snow Egret",
    photo: "./public/img/snow-egret.jpg"
  },
  {
    name: "Snow Goose",
    photo: "./public/img/snow-goose.jpg"
  },
  {
    name: "Snowy Plover",
    photo: "./public/img/snowy-plover.jpg"
  },
  {
    name: "Solitary Vireo",
    photo: "./public/img/solitary-vireo.jpg"
  },
  {
    name: "Song Sparrow",
    photo: "./public/img/song-sparrow.jpg"
  },
  {
    name: "Sooty Shearwater",
    photo: "./public/img/sooty-shearwater.jpg"
  },
  {
    name: "Spotted Owl",
    photo: "./public/img/spotted-owl.jpg"
  },
  {
    name: "Spotted Sandpiper",
    photo: "./public/img/spotted-sandpiper.jpg"
  },
  {
    name: "Spotted Towhee",
    photo: "./public/img/spotted-towhee.jpg"
  },
  {
    name: "Surfbird",
    photo: "./public/img/surfbird.jpg"
  },
  {
    name: "Surf Scoter",
    photo: "./public/img/spotted-ow.jpg"
  },
  {
    name: "Swainson's Hawk",
    photo: "./public/img/swainsons-hawk.jpg"
  },
  {
    name: "Swainson's Thrush",
    photo: "./public/img/swainsons-thrush.jpg"
  },
  {
    name: "Townsend's Solitaire",
    photo: "./public/img/townsends-solitaire.jpg"
  },
  {
    name: "Townsend's Warbler",
    photo: "./public/img/townsends-warbler.jpg"
  },
  {
    name: "Tree Swallow",
    photo: "./public/img/tree-swallow.jpg"
  },
  {
    name: "Trumpeter Swan",
    photo: "./public/img/trumpeter-swan.jpg"
  },
  {
    name: "Tufted Puffin",
    photo: "./public/img/tufted-puffin.jpg"
  },
  {
    name: "Turkey Vulture",
    photo: "./public/img/turkey-vulture.jpg"
  },
  {
    name: "Varied Thrush",
    photo: "./public/img/varied-thrush.jpg"
  },
  {
    name: " Vaux's Swift",
    photo: "./public/img/vauxs-swift.jpg"
  },
  {
    name: "Vesper Sparrow",
    photo: "./public/img/vesper-sparrow.jpg"
  },
  {
    name: "Violet-green Swallow",
    photo: "./public/img/violet-green-swallow.jpg"
  },
  {
    name: "Virginia Rail",
    photo: "./public/img/virginia-rail.jpg"
  },
  {
    name: "Wandering Tattler",
    photo: "./public/img/wandering-tattler.jpg"
  },
  {
    name: "Warbling Vireo",
    photo: "./public/img/warbling-vireo.jpg"
  },
  {
    name: "Western Bluebird",
    photo: "./public/img/western-bluebird.jpg"
  },
  {
    name: "Western Grebe",
    photo: "./public/img/western-grebe.jpg"
  },
  {
    name: "Western Gull",
    photo: "./public/img/western-gull.jpg"
  },
  {
    name: "Western Kingbird",
    photo: "./public/img/western-kingbird.jpg"
  },
  {
    name: "Western Meadowlark",
    photo: "./public/img/western-meadowlark.jpg"
  },
  {
    name: "Western Sandpiper",
    photo: "./public/img/western-sandpiper.jpg"
  },
  {
    name: "Western Screech Owl",
    photo: "./public/img/western-screech-owl.jpg"
  },
  {
    name: "Western Scrub Jay",
    photo: "./public/img/townsends-solitaire.jpg"
  },
  {
    name: "Western Tanager",
    photo: "./public/img/western-tanager.jpg"
  },
  {
    name: "Western Wood-pewee",
    photo: "./public/img/western-wood-pewee.jpg"
  },
  {
    name: "Whimbrel",
    photo: "./public/img/whimbrel.jpg"
  },
  {
    name: "White-breasted Nuthatch",
    photo: "./public/img/white-breasted-nuthatch.jpg"
  },
  {
    name: "White-crowned Sparrow",
    photo: "./public/img/white-breasted-nuthatch.jpg"
  },
  {
    name: "White-faced Ibis",
    photo: "./public/img/white-faced-ibis.jpg"
  },
  {
    name: "White-headed Woodpecker",
    photo: "./public/img/white-headed-woodpecker.jpg"
  },
  {
    name: "White-tailed Ptarmigan",
    photo: "./public/img/white-tailed-ptarmigan.jpg"
  },
  {
    name: "White-throated Swift",
    photo: "./public/img/white-throated-swift.jpg"
  },
  {
    name: "White-winged Scoter",
    photo: "./public/img/white-winged-scoter.jpg"
  },
  {
    name: "Willet",
    photo: "./public/img/willet.jpg"
  },
  {
    name: "Williamson's Sapsucker",
    photo: "./public/img/williamsons-sapsucker.jpg"
  },
  {
    name: "Wilson's Phalarope",
    photo: "./public/img/wilsons-phalarope.jpg"
  },
  {
    name: "Wilson's Warbler",
    photo: "./public/img/wilsons-warbler.jpg"
  },
  {
    name: "Winter Wren",
    photo: "./public/img/winter-wren.jpg"
  },
  {
    name: "Wood Duck",
    photo: "./public/img/wood-duck.jpg"
  },
  {
    name: "Wrentit",
    photo: "./public/img/wrentit.jpg"
  },
  {
    name: "Yellow-breasted Chat",
    photo: "./public/img/yellow-breasted-chat.jpg"
  },
  {
    name: "Yellow-headed Blackbird",
    photo: "./public/img/yellow-headed-blackbird.jpg"
  },
  {
    name: "Yellow-rumped Warbler",
    photo: "./public/img/yellow-rumped-warbler.jpg"
  },
  {
    name: "Yellow Warbler",
    photo: "./public/img/yellow-warbler.jpg"
  }
];

module.exports = birdsArray;
