import React from 'react';
import {BaseLayout, MainContainer, SelectMui, AccordionSection, Pagination as Paginate} from "../../rsc/components";
import {
    Card, CardContent, CardHeader, Checkbox,
    Container, Divider, Drawer, FormControl, FormControlLabel, FormLabel, Grid, Grow,
    IconButton, InputAdornment, NativeSelect, Paper, Radio, CircularProgress, RadioGroup, Slider, TextField,
    Typography, useTheme, Button
} from "@material-ui/core";
import {MdClose, MdExpandMore, MdFilter, MdSort} from "react-icons/md";
import {useCatalogueStyle} from "../../styles/pages/categorySlug.style";
import style from "../../styles/pages/categorySlug.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {PropertyWidget} from "../../rsc/components";
import {FixedSideBar} from "../../rsc/components/FixedSideBar";
import {cc} from "../../rsc/utils/css";
import {FiFilter} from "react-icons/fi";
import {useIsViewportMb} from "../../rsc/hooks/useIsViewportMb";
import {useForm} from "../../rsc/hooks/useForm";
import {Scrollbars} from 'react-custom-scrollbars';
import {
    addAttributeFilter,
    setAttributesFilter,
    setCategoryFilter, setDataSortingFilter,
    setPriceFilter,
    deleteAttributeFilter,
    setDataFiltered
} from "../../rsc/store/actions";
import {formatText, formatPrice} from "../../rsc/utils/utilsFunction";
import Pagination from '@material-ui/lab/Pagination';
import {API_BASE} from "../_app"

export default function Catalogue(props) {
    const dispatch = useDispatch()
    const formDatas = {
        "data-sort": "date:desc"
    }
    const rightContainerRef = React.useRef()
    const [rightContainerHeight, setRightContainerHeight] = React.useState(null)
    const [form, handleForm] = useForm(formDatas)
    const classes = useCatalogueStyle()
    const isMb = useIsViewportMb()
    const {properties, dataSorting, attributes, priceRange, priceFilter} = useSelector(({datas: {filteredProperties:properties, attributes, priceRange}, filters:{dataSorting, price:priceFilter}}) => ({properties, dataSorting, attributes, priceRange})) 
    React.useEffect(() => {
        if (rightContainerRef.current) {
            setRightContainerHeight(rightContainerRef.current.getBoundingClientRect().height)
        }
    }, [])
    React.useEffect(() => {
        let d = form["data-sort"].split(':')
        dispatch(setDataSortingFilter({[d[0]]: d[1]}))
    }, [form])

    const dataBaseSortingForm = () => {
        return (
            <NativeSelect value={form["data-sort"]} name={"data-sort"} onChange={handleForm}>
                {
                    [
                        {title: "Date - décroissant", value: "date:desc"},
                        {title: "Date - croissant", value: "date:asc"},
                        {title: "Prix - décroissant", value: "price:desc"},
                        {title: "Prix - croissant", value: "price:asc"}

                    ].map(option => <option key={option.title.toLowerCase()}
                                        value={option.value ? option.value : option.title}
                                    >
                                        {option.title}
                                    </option>
                    )
                }
            </NativeSelect>
        )
    }

    const propertiesSection = (properties) => {
        let datas;
        if (properties === null) {
            datas = <Placeholder type={"loader"}/>
        } else {
            if (properties instanceof Array && properties.length === 0) {
                datas = <Placeholder type={"empty"}/>
            } else {
                let m = properties.map((property, i) => (
                    <Grid key={i} item md={4} sm={6} xs={12} key={i}>
                        <PropertyWidget property={property}/>
                    </Grid>
                ))
                datas = (
                    <Grid container spacing={2}>
                        {m}
                    </Grid>
                )
            }
        }
        return datas
    }
    return (
        <BaseLayout pageTitle={"Catalogue"}>
            <MainContainer style={{backgroundColor: "var(--primary-color)"}}>
                <Container >
                    <div className={classes.pageTitleContainer}>
                        <Grid container justify={"space-between"}>
                            <Grid item xs={12} md={"auto"}>
                                <Typography variant={"h5"} className={" text-white " + classes.pageTitle}>Catalogue d'Appartements & Chambres À Louer</Typography>
                            </Grid>
                            <Grid item xs={12} md={"auto"} className={(isMb ? "d-flex justify-right" : "")}>
                                <div className={"d-flex pl-3  r-1 " + classes.nativeFilterSelect}
                                     style={{alignItems: "center", backgroundColor: "#eee"}}>
                                    <Typography className={"bolded-900 mr-2"}><MdSort width={25}/>{!isMb && 'Filtrer:'}
                                    </Typography>
                                    {dataBaseSortingForm()}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </MainContainer>
            <MainContainer >
                <Container >
                    {
                        !isMb &&
                        <div className={"d-flex"}>
                            <section className={classes.leftSection}>
                                <FilterCard
                                    stickyHeight={rightContainerHeight}
                                />
                            </section>
                            <div className={classes.rightSection + " m-2"} ref={rightContainerRef}>
                                <Container className={"pr-0 py-5"}>
                                {
                                    properties!==null && properties.length ?
                                    <Paginate items={properties} itemPerPage={12}>
                                        {
                                            (paginatedItems,currentPageNumber,perPageContentSize, pagesCount,  paginationHandles/*:{prev,next, jumpToPage}*/)=>{
                                               const handleChange=(e, v)=>{
                                                    paginationHandles.jumpToPage(Number(v));
                                               }
                                                return <>
                                                            {propertiesSection(paginatedItems)}
                                                            <Pagination count={pagesCount} page={currentPageNumber} onChange={handleChange} color={"secondary"} className={"mt-8 justify-center"}/>
                                                        </>
                                            }
                                        }
                                    </Paginate>
                                    :
                                    propertiesSection(properties)
                                }
                                </Container>
                            </div>
                        </div>
                    }
                    {
                        isMb &&
                        <>
                            <div className={"my-5"}>
                                {propertiesSection(properties)}
                            </div>
                            <FilterCard
                                type={"sm"}
                                sortingData={dataSorting}
                            />
                        </>
                    }
                </Container>
            </MainContainer>
        </BaseLayout>
    )
}

//Page Special Components
const FilterAccordion = (props)=> <AccordionSection {...props}/>

const Placeholder = ({type}) => {
    const classes = useCatalogueStyle()
    return (
        <>
            {
                type === "empty" &&
                <div className={classes.emptyContainer}>
                    <div className={classes.emptyDescription}>
                        <svg id="Layer_4" className={classes.emptySvg} style={{fill: "var(--dark)"}}
                             viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 4">
                            <path
                                d="m446.4 164.8-176-132a24.122 24.122 0 0 0 -28.8 0l-176 132a24 24 0 0 0 14.4 43.2h8v216a40.046 40.046 0 0 0 40 40h200a8 8 0 0 0 0-16h-200a24.027 24.027 0 0 1 -24-24v-216h304v208a8 8 0 0 0 16 0v-208h8a24 24 0 0 0 14.4-43.2zm-6.81 21.729a7.772 7.772 0 0 1 -7.59 5.471h-352a8 8 0 0 1 -4.8-14.4l176-132a8.042 8.042 0 0 1 9.6 0l176 132a7.77 7.77 0 0 1 2.79 8.929z"/>
                            <path d="m192 312h16a40.046 40.046 0 0 1 40-40v-16a56.063 56.063 0 0 0 -56 56z"/>
                            <path
                                d="m307.313 401.941a8 8 0 0 0 2.343 5.657l79.2 79.2a8 8 0 0 0 11.314 0l22.627-22.627a8 8 0 0 0 0-11.314l-79.2-79.2a8 8 0 0 0 -11.314 0l-5.657 5.657-11.026-11.033a88.1 88.1 0 1 0 -11.319 11.319l11.032 11.032-5.657 5.657a8 8 0 0 0 -2.343 5.652zm-59.313-17.941a72 72 0 1 1 72-72 72.081 72.081 0 0 1 -72 72zm89.941 6.627 67.882 67.883-11.313 11.313-67.883-67.882z"/>
                        </svg>
                        <Typography variant={("body1")}>
                            Aucune proprété ne correspond à votre selection
                        </Typography>
                    </div>
                </div>
            }
            {
                type === "loader" &&
                <div className={classes.emptyContainer}>
                    <div className={classes.emptyDescription}>
                        <div>
                            <CircularProgress color={"primary"}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
const FilterCard = ({type = "lg", stickyHeight}) => {
    const classes = useCatalogueStyle({releasedTop: Math.round(stickyHeight) - 10});
     
    const store=useSelector(store=>store)
    const dispatch = useDispatch()
    const [openSmFilterDrawer, setOpenSmFilterDrawer] = React.useState(false)

    React.useEffect(async()=>{
        if(store.filters.dataSorting){
            switch(store.filters.filterSide){
                case "client":
                    dispatch(setDataFiltered(sortClient(store.datas.filteredProperties)))
                    break;
                default:
                    await handleFilterApi()
                    break;
            }
        }
    },[store.filters.dataSorting])

    const handlePriceChange=(values) => {
        dispatch(setPriceFilter({min: Number(values[0]), max: Number(values[1])}))
    }

    const handleOpenSmFilterDrawer = () => setOpenSmFilterDrawer(prev => !prev)
    
    const filterDatasClient= (filter = {}, type, properties) => {
        let props;
        switch (type) {
            case "category":
                props= filter.id !== "all" ? properties.filter(property => property.category.id === filter.id) : properties;
                break;
            case "attribute":
                const key=Object.keys(filter)[0]
                let attribute = store.datas.attributes.find(a => a.slug === key)
                const getRealValue=(v)=>{
                    if(/vrai|faux|oui|non|true|false/i.test(v)){
                        if(/true|vrai|oui/.test(v)){
                            return true;
                        }else{
                            return false
                        }
                    }else if(!isNaN(v)){
                        return Number(v)
                    }
                    return v;
                }
                props=filter[key] !== "all" ?
                properties.filter(property=>property.metas.find(meta=>{
                    if (typeof meta.attribute === "string") {
                        return meta.attribute === attribute.id && meta.value===getRealValue(filter[key])
                    } else if (typeof meta.attribute === "object") {
                        return meta.attribute.id === attribute.id && meta.value===getRealValue(filter[key])
                    }
                    return false;
                }))
                :
                properties;
                break;
            case "price":
                props=properties.filter(property => Number(property.price) >= filter.min && Number(property.price) <= filter.max)
                break;
        }
        return sortClient(props);
    }

    const sortClient=(properties)=>{
        return properties.sort((cur, prev)=>{
            for(let data in store.filters.dataSorting){
                switch(data){
                    case "date":
                        if(store.filters.dataSorting[data].toLowerCase()==="asc") {
                            return new Date(prev.createdAt) < new Date(cur.createdAt);
                        }else{
                            return new Date(prev.createdAt) > new Date(cur.createdAt);
                        }
                        break;
                    case "price":
                        if(store.filters.dataSorting[data].toLowerCase()==="asc") {
                            return prev.price < cur.price;
                        }else{
                            return prev.price > cur.price;
                        }
                        break;
                    default:
                        return true 
                }
            }
        })
    }
    const handleFilterClient = () => {
        dispatch(setDataFiltered(null))
        //Category Filtering
        let datas = filterDatasClient(store.filters.category, "category", store.datas.properties);
        //price filtering
        datas = filterDatasClient(store.filters.price, "price", datas)
        //attribute filtering
        for (let attribute in store.filters.roomAttributes) {
            if (store.filters.roomAttributes[attribute] === "all") continue;
            datas = filterDatasClient({[attribute]: store.filters.roomAttributes[attribute]}, "attribute", datas)
        }
        dispatch(setDataFiltered(datas))
    }

    const handleFilterApi=async ()=>{
        const {filters}=store
        if(filters.category && Object.keys(filters.category).length && filters.dataSorting && Object.keys(filters.dataSorting).length){
            dispatch(setDataFiltered(null))
            //Category Filtering
            const sortingkeys=Object.keys(store.filters.dataSorting)
            const query=`${filters.category.id!=="all" ? `category=${filters.category.id}&` :`${store.datas.categories.map(cat=>`or:category.id=${cat.id}`).join('&')}&`}price:gte=${filters.price.min}&price:lte=${filters.price.max}${Object.keys(filters.roomAttributes).length ?  Object.keys(filters.roomAttributes).filter(attr=>filters.roomAttributes[attr]!=="all").map(attrSlug=>`&metas.propertyMeta=${filters.roomAttributes[attrSlug]}&metas.attribute.slug=${attrSlug}`).join('&') : ``}${sortingkeys.length ? `${`&${sortingkeys[0]==="date" ? `sort:createdAt=${store.filters.dataSorting[sortingkeys[0]]}` : `&sort:${sortingkeys[0]}=${store.filters.dataSorting[sortingkeys[0]]}`}`}`:``}`
            let datas=await fetch(`${API_BASE}/properties?${query}&fields=*,medias.*,medias.mediaType.*,category.*,adress.*,metas.*,metas.attribute.*`).then(r=>r.json())
            datas=sortClient(datas)
            dispatch(setDataFiltered(datas))
        }
    }

    const handleFilter=async ()=>{
        switch(store.filters.filterSide){
            case "client":
                await handleFilterClient()
                break;
            default:
                await handleFilterApi()
                break;
        }
    }

    const getCard = () => {
        return (
            <Card className={" r-2"} classes={{root: classes.leftSectionCard}}
                  style={{/*overflow:"hidden"*/}} elevation={4}>
                {/*<Scrollbars
                    autoHeight
                    autoHeightMin={250}
                    autoHeightMax={500}
                ></Scrollbars>*/}
                <CardContent>
                    <Typography variant={"subtitle1"} className={"bolded-900 pl-1 mt-1"} style={{fontSize: "1.01rem"}}>
                        Filter
                    </Typography>
                    <div className={cc(style, ['mt-2'])}>
                        {
                            filterContent.map(({title, data, isInitiallyExpended}, i) => (
                                <FilterAccordion title={title} key={i} isInitiallyExpended={isInitiallyExpended !== undefined ? isInitiallyExpended : true}>
                                    {data}
                                </FilterAccordion>
                            ))
                        }
                    </div>
                    <div className={"d-flex justify-center"}>
                        <Button color={"secondary"} onClick={handleFilter} className={'text-white'} variant={"contained"} disabled={store.datas.filteredProperties === null}>
                            {
                                store.datas.filteredProperties === null ?
                                    <CircularProgress color={"primary"} style={{width: 25, height:25}}/> : "Filtrer"
                            }
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )
    }

    if(!(store.filters.price.min && store.filters.price.max)){
        dispatch(setPriceFilter(store.datas.priceRange))
    }

    const filterContent = [
        {title: "Categories", data: <CategoriesFilter/>},
        {title: "Prix de location", data: <SliderRange range={[store.datas.priceRange.min, store.datas.priceRange.max]} values={store.filters.price.min && store.filters.price.max ? [store.filters.price.min, store.filters.price.max]:[store.datas.priceRange.min, store.datas.priceRange.max]} onChange={handlePriceChange}/>},
        {title:"Filtres Avancés", data:<AdvancedFiltering attributes={store.datas.attributes}/>, isInitiallyExpended:false}       
    ]

    return (
        <>
            {
                type === "sm" &&
                    <>
                        <div className={"sm:filter-btn " + classes.floatingFilterBtn}>
                            <Grow in={true}>
                                <IconButton className={"shadowed-1"} style={{
                                    backgroundColor: "var(--primary-color)",
                                    color: "#fff"
                                }} onClick={handleOpenSmFilterDrawer}>
                                    <FiFilter width={15}/>
                                </IconButton>
                            </Grow>
                        </div>
                        <Drawer open={openSmFilterDrawer} onClose={handleOpenSmFilterDrawer}>
                            <div className={classes.smFilterContainer}>
                                <div className={"pt-1 bordered bt-0 bl-0 br-0 pl-5 pr-3 d-flex justify-space-between"}>
                                    <Typography variant={"h6"} style={{lineHeight: "2.5"}}>
                                        Filtres
                                    </Typography>
                                    <IconButton onClick={handleOpenSmFilterDrawer}>
                                        <MdClose width={25}/>
                                    </IconButton>
                                </div>
                                <div className={"mb-5"}>
                                    {
                                        filterContent.map(({title, data}, i) => (
                                            <div key={i}>
                                                <div className={"px-5 my-5"}>
                                                    <Typography className={"bolded-900 mb-3"}>
                                                        {title}
                                                    </Typography>
                                                    <div className={"px-3"}>
                                                        {data}
                                                    </div>
                                                </div>
                                                {(i + 1) !== filterContent.length && <Divider/>}
                                            </div>
                                        ))
                                    }
                                    <div className={"d-flex justify-center"}>
                                        <Button color={"secondary"} onClick={()=>{handleFilterClient(); handleFilter()}} className={'text-white p-0'} variant={"contained"} disabled={store.datas.filteredProperties === null}>
                                            {
                                                store.datas.filteredProperties === null ?
                                                    <CircularProgress color={"primary"} style={{width: 25, height:25}}/> :
                                                    "Filtrer"
                                            }
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Drawer>
                    </>
            }
            {
                type === "lg" && getCard()
            }
        </>
    )
}
const SliderRange = ({name, values = [0, 100], range = [0, 1000], onChange}) => {
    const classes = useCatalogueStyle()
    const handleSlider = (e, value) => {
        if (onChange instanceof Function) onChange(value)
    }

    return (
        <div className={"px-2"}>
            <div>
                <Slider
                    name={name ?? "filter-price-range"}
                    onChange={handleSlider}
                    value={values}
                    min={range[0]}
                    max={range[1]}
                    valueLabelDisplay={"auto"}
                    classes={{valueLabel: classes.valueLabel}}
                    valueLabelFormat={(value) => formatPrice(value)}
                />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <span>CFA</span>
                                </InputAdornment>
                            )
                        }}
                        placeholder={"MIN"}
                        value={formatPrice(values[0])}
                        classes={{
                            root: classes.fmControllPriceRangeTextField
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        placeholder={"MAX"}
                        value={formatPrice(values[1])}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <span>CFA</span>
                                </InputAdornment>
                            )
                        }}
                        classes={{
                            root: classes.fmControllPriceRangeTextField
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
const CategoriesFilter = ({initialValue = "all"}) => {
    const classes = useCatalogueStyle()
    const store = useSelector(store => store)
    const [form, handleForm] = useForm({"filter-category": store.filters.category && store.filters.category.id ? store.filters.category.slug : initialValue})
    const dispatch = useDispatch();
    const usedCategories = [{id: 'all', name: "Tout", slug: "all"}, ...(store.datas.categories ?? [])]
    React.useEffect(() => {
        dispatch(setCategoryFilter(usedCategories.find(({slug}) => {
            return slug === form["filter-category"]
        })));
    }, [form])
    return (
        <RadioGroup aria-label={"filter-category"} value={form["filter-category"]} name={"filter-category"} onChange={handleForm}>
            {
                usedCategories.map(({name, slug}, i) => {
                    const id = "Category" + i;
                    return <FormControlLabel
                        control={<Radio/>}
                        classes={{
                            root: classes.filterInput,
                            label: classes.filterLabel
                        }}
                        key={id}
                        label={name}
                        value={slug}
                    />
                })
            }
        </RadioGroup>
    )
}
const AdvancedFiltering = ({attributes}) => {
    const [formDatas, setFormDatas] = React.useState({})
    const dispatch = useDispatch()
    const formatedAttribues = attributes.filter(attr => attr.type.toLowerCase().includes('text') || attr.type.toLowerCase().includes('bool')).map(attribute => ({
        title: formatText(attribute.name, formatText.FIRST_LETTERS_CAP),
        name: attribute.slug,
        initialValue: "all",
        values: [{
            label: "Tout",
            slug: "all"
        }, ...attribute.metas.map(data => ({
            label: formatText(data.value===true ? "Oui" : (data.value===false ? "Non" : data.value), formatText.FIRST_LETTERS_CAP),
            slug: String(data.value)
        }))]
    }))

    const handleChange = (key, value) => {
        setFormDatas(prev => ({...prev, [key]: value}))
    }

    React.useEffect(() => {
        dispatch(setAttributesFilter(formDatas))
    }, [formDatas])

    const store=useSelector(store=>store)

    return (
        <div style={{width: "100%"}}>
            {
                formatedAttribues.map((filter, i) => (
                    <SelectMui
                        key={filter.name + "-" + i}
                        title={filter.title}
                        selectProps={{id: filter.name, name: filter.name, style: {width: "100%"}}}
                        id={filter.name + "-" + i}
                        key={filter.name + "-" + i}
                        options={filter.values.map(v => ({title: v.label, value: v.slug}))}
                        initialValue={store.filters.roomAttributes[filter.name]  ?? filter.initialValue ?? ""}
                        className={"my-2"}
                        onChange={(value) => handleChange(filter.name, value)}
                    />
                ))
            }
            <NumberFilter
                attributes={attributes.filter(attr => attr.type.toLowerCase().includes('num'))}
            />
        </div>
    )
}
const NumberFilter = ({attributes}) => {
    const [boxe, setBox] = React.useState({})
    const roomTypes = attributes.map(attr => ({
        title: formatText(attr.name, formatText.FIRST_LETTER_CAP),
        value: attr.slug
    }))

    const handleBtnClick = () => {
        setBox(prev => ({...prev, ["box-" + (Object.keys(prev).length + 1)]: ""}))
    }
    const handleClose = (id) => {
        setBox(prev => {
            const p = {}
            for (let i in prev) {
                if (i !== id) {
                    p[i] = prev[i];
                }
            }
            return p;
        })
    }
    const handleChanges = (id, newValue) => {
        setBox(prev => ({...prev, ...{[id]: newValue}}))
    }
    return (
        <div className={"my-2"}>
            <Typography className={""} variant={'subtitle2'}>
                Filtre par nombre
            </Typography>
            <Button
                onClick={handleBtnClick}
                fullWidth
                disabled={(() => {
                    const realValues = Object.keys(boxe);
                    if (realValues.length === roomTypes.length) {
                        return true
                    }
                    return false;
                })()}
                variant={"outlined"}
                style={{padding: 0}}
                className={"mt-1"}
                color={'primary'}
            >
                Ajouter
            </Button>
            {
                Object.keys(boxe).map((box, i) => {
                    return (
                        <NumberFilterBox 
                            onChange={handleChanges} id={box}
                             roomTypes={roomTypes.filter(v => ((Object.values(boxe).includes(v.value) && boxe[box] === v.value) || !Object.values(boxe).includes(v.value)))}
                             key={i} 
                             onClose={handleClose}
                        />
                    )
                })
            }
        </div>
    )
}
const NumberFilterBox = ({onClose, id, roomTypes, onChange}) => {
    const classes = useCatalogueStyle()
    const dispatch = useDispatch();
    const [value, setValue] = React.useState("")
    const [form, handleForm] = useForm({["text-" + id]: ""})
    const handleClose = () => {
        if (onClose instanceof Function) {
            onClose(id)
            dispatch(deleteAttributeFilter({[value]: form["text-" + id]}))
        }
    }
    const handleSelectChange = (value) => {
        if (onChange instanceof Function) {
            onChange(id, value);
            setValue(value);
        }
    }
    React.useEffect(() => {
        if (value.length) {
            dispatch(addAttributeFilter({[value]: form["text-" + id]}))
        }
    }, [form])
    return (
        <div className={"px-2"} className={classes.numberFilteringBox}>
            <Typography variant={"caption"} className={"bolded-900 mb-1"}>
                Filtre sur nombre
            </Typography>
            <SelectMui
                title={"Emplacement"}
                selectProps={{id: "emplacement-" + id, name: "emplacement", style: {width: "100%"}}}
                id={"emplacement-" + id}
                placeholder={"Selectionner"}
                options={roomTypes}
                className={"mt-1"}
                onChange={handleSelectChange}
            />
            {
                value.length ?
                    <TextField
                        label={"Nombre"}
                        type={"number"}
                        name={"text-" + id}
                        value={form["text-" + id]}
                        onChange={handleForm}
                        fullWidth
                    />
                    : ""
            }
            <IconButton className={classes.numberFilteringBoxCloseBtn + " shadowed-1"} onClick={handleClose}><MdClose
                width={20} style={{width: 20, height: 20}}/> </IconButton>
        </div>
    )
}


export const getServerSideProps = async (context) => {
    const mainCategory=await fetch(`${API_BASE}/categories?parent=null&slug=${context.params.categorySlug}&fields=*,children.*`).then(r=>r.json());
    
    if(mainCategory[0]){
        const properties=await fetch(`${API_BASE}/properties/?${mainCategory[0].children.map(child=>`or:category=${child.id}`).join('&')}&fields=*,medias.*,medias.mediaType.*,category.*,adress.*,metas.*,metas.attribute.*&sort:createdAt=desc`).then(r=>r.json());
        const categories=await fetch(`${API_BASE}/categories`).then(r=>r.json());
        const attributes=await fetch(`${API_BASE}/attributes?fields=*,metas:unique.propertyMeta&${[...categories, mainCategory[0]].map(cat=>`or:category.id=${cat.id}`).join('&')}`).then(r=>r.json());
        
        return {
            props: {
                    initialStore: {
                        datas: {
                            categories: mainCategory[0].children,
                            properties: properties,
                            filteredProperties: properties,
                            attributes: attributes,
                            priceRange: {min: 10000, max:300000}
                        },
                        filters: {
                            filterSide: "api"
                        },
                    }
                }
            }
        }

    return {
        notFound:true
    }
}
