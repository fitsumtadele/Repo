
export const AppConst = {
        API_URL: {
            Attachment: {
                Attachment: "Attachment",
                AttachmentBase64: "Attachment/Base64/:id",
                AttachmentSingle: "Attachment/Single/:id",
                AttachmentSingleByPermission: "Attachment/Single/:id/:userId/:permission",
                SubmoduleAttachment: "Attachment/Documents/:submoduleCode/:referenceId",
                AttachmentDownload: "Attachment/Print/:id"
            },
            Account: {
                Users: "Users/:id",
                UserList: "Users/List",
                UserRole: "Users/ByRole/:roleID",
                Roles: "Roles/:id",
                Autenticate: "Account/Authenticate",
                ChangePassword: "Account/ChangePassword",
                ResetPassword: 'Account/ResetPassword/:username',
                ValidateToken: 'Account/ValidateToken',
                Logout: 'Account/Logout/:userID'
            },
            Menus: {
                Menus: "Menus/:id",
                MenusByUser: "Menus/ByUser/:userID",
                UpdateRoleMenu: "Menus/MenuRoles"
            },
            Permissions: {
                Permissions: "Permissions/:id",
                CreateRolePermissions: "Roles/CreateRolePermission"
            },
            LookUp: {
                Currency: "Currency/:id",
                PaymentMode: "PaymentMode/:id",
                PortOfEntry: "PortOfEntry/:id",
                ShippingMethod: "ShippingMethod/:id",
                ShippingPortOfEntry: "PortOfEntry/ByShippment/:shippingID",
                ImportPermitDelivery: "ImportPermitDelivery/:id",
                UserTypes: "UserType/:id",
                Country: "Country/:id",
                AgentType: "AgentType/:id",
                AgentLevel: "AgentLevel/:id",
                ImportPermitType: "ImportPermitType/ByCode/:code",
                PaymentTerm: "PaymentTerm/:id",
                FeeType: "FeeType/:id",
                Manufacturer: "Manufacturer/:id",
                ForeignApplicationStatus: "ForeignApplicationStatus",
                ManufacturerSearch: "Manufacturer/Search/:query/:pageNo/:pageSize",
                ManufacturerType: "ManufacturerType/:id",
                MaType: "MAType",
                ModuleMaType: "MAType/ByModuleCode/:moduleCode",
                PackSize: "PackSize",
                PackSizeSearch: "PackSize/Search"
            },
            Commodity: {
                Product: "Product/:id",
                AgentProduct: "Product/ByAgent/:agentID",
                AgentProductList: "Product/ByAgent/List",
                ProductManufacturer: "Manufacturer/ByProduct/:productID",
                ProductSearch: "Product/Search/:query",
                SRA: "SRA",
                AdminRoute: "AdminRoute",
                AdminRouteSearch: "AdminRoute/Search",
                AgeGroup: "AgeGroup",
                ATC: "ATC",
                ATCSearch: "ATC/Search",
                ContainerType: "ContainerType",
                ContainerTypeSearch: "ContainerType/Search",
                DosageForm: "DosageForm",
                DosageFormSearch: "DosageForm/Search",
                DosageUnit: "DosageUnit",
                DosageUnitSearch: "DosageUnit/Search",
                Excipient: "Excipient",
                ExcipientSearch: "Excipient/Search",
                INN: "INN",
                INNSearch: "INN/Search",
                PharmacologicalClassification: "PharmacologicalClassification",
                PharmacologicalClassificationSearch: "PharmacologicalClassification/Search",
                PharmacopoeiaStandard: "PharmacopoeiaStandard",
                PharmacopoeiaStandardSearch: "PharmacopoeiaStandard/Search",
                ProductCategory: "ProductCategory",
                DosageStrength: "DosageStrength",
                DosageStrengthSearch: "DosageStrength/Search",
                ProductType: "ProductType",
                ProductTypeSearch: "ProductType/Search",
                ShelfLife: "ShelfLife",
                ShelfLifeSearch: "ShelfLife/Search",
                UseCategory: "UseCategory",
                UseCategorySearch: "UseCategory/Search"
            },
            Document: {
                DocumentType: "DocumentType/:id",
                ModuleDocument: "ModuleDocument/:id",
                ModuleDocumentByModule: "ModuleDocument/ByModule/:code",
                ModuleDocumentByModuleCode: "ModuleDocument/ByModuleCode/:code"
            },
            Module: {
                Module: "Module/:id",
                ModuleByCode: "Module/ByCode/:code",
                ModuleDocument: "",
                ModuleDocumentBySubModule: "ModuleDocument/BySubmodule/:id/:active",
                ModuleDocumentBySubModuleCode: "ModuleDocument/BySubmoduleCode/:code",
                ModuleDocumentBySubModuleCodeSRA: "ModuleDocument/BySubmoduleCode/:code/:isSra",
                ModuleDocumentByDocumentTypeCode: "ModuleDocument/ByCodes/:submoduleCode/:documentTypeCode",
                SubModuleByModule: "Submodule/ByModule/:id/:isCommodityType",
                UpdateModuleDocument: "ModuleDocument/InsertOrUpdate"
            },
            Submodule: {
                Submodule: "Submodule/:id",
                SubmoduleFeeList: "SubmoduleFee/BySubmodule/:id/:active",
                SubmoduleFeeInsertOrUpdate: "SubmoduleFee/InsertOrUpdate"
            },
            ImportPermit: {
                ImportPermit: "ImportPermit/:id",
                SingleImportPermit: "ImportPermit/Single/:id",
                AgentImportPermit: "ImportPermit/ByAgent/:agentID",
                AgentList: "Agent/AgentsForIPermit",
                List: "ImportPermit/List",
                Submit: "ImportPermit/Submit",
                Withdraw: "ImportPermit/Withdraw",
                SubmitForApproval: "ImportPermit/SubmitForApproval",
                SubmitForRejection: "ImportPermit/SubmitForRejection",
                ReturnToAgent: "ImportPermit/ReturnToAgent",
                ReturnToCSO: "ImportPermit/ReturnToCSO",
                Approve: "ImportPermit/Approve",
                Reject: "ImportPermit/Reject",
                History: "ImportLogStatus/IPermitHistory/:ipermitId/:isAgent",
                Assign: "ImportPermit/Assign",
                SupplierProduct: "Product/BySupplierForIpermit/:supplierID",
                CheckInvoiceDuplicate: "ImportPermit/DuplicateInvoice",
                PIPList: "ImportPermit/PIP/List",
                Void: "ImportPermit/Void"
            },
            Agent: {
                Agent: "Agent/:id",
                AgentList: "Agent/List",
                AgentByType: "Agent/ByType/:code",
                UserAgent: "Agent/ByUser/:userID",
                SupplierAgent: "Agent/BySupplier/:supplierID",
                AgentSupplier: "Supplier/ByAgent/:agentID/:agentLevelCode",
                AgentUsers: "Users/ByAgent/:agentID",
                CreateAgentUsers: "Agent/CreateUserAgent",
                CreateOrUpdateSupplierAgent: "Agent/AgentSupplier/InsertOrUpdate",
                AgentUnderSupplier: "Agent/AgentSupplier/BySupplier/:supplierID",
                AgentUnderSupplierHistory: "Agent/AgentSupplier/History/:agentSupplierID",
                AgentSupplierByAgent: "Agent/AgentSupplier/ByAgent/:agentID",
                UsersForAgent: "Users/AgentUsers",
                AgentHistory: "Agent/History/:agentID"
            },
            Supplier: {
                Supplier: "Supplier/:id",
                SupplierList: "Supplier/List",
                SupplierProduct: "Product/BySupplier/:supplierID",
                AgentSupplier: "Agent/AgentSupplier/:supplierID/:agentID",
                SupplierHistory: "Supplier/History/:supplierID",
                SupplierSearch: "Supplier/Search"
            },
            Public: {
                AgentList: 'Public/Agent/List',
                ProductList: 'Public/Product/List',
                ProductDetail: 'Public/Product/:id',
                AgentDetail: 'Public/Agent/:id',
                ProductByAgent: 'Public/Product/ByAgent/:id'
            },
            Report: {
                TabularReports: "Report/Tabular/ByUser/:userID",
                TabularReport: "Report/Tabular/:reportid",
                ChartReport: "Report/Chart/ByUser/:userID",
                ReportList: "Report",
                UpdateRoleReport: "Report/ReportRoles"
            },
            SystemSettings: {
                SystemSettings: "SystemSetting/:id",
                UpdateSystemSettings: "SystemSetting/InsertOrUpdate"
            },
            WIP: {
                AllWIPByUser: "WIP/ByUser/:type/:userID",
                InsertOrUpdateWIP: "WIP/InsertOrUpdate",
                WIPById: "WIP/:id"
            },
            Changelog: {
                AllChangeLogs: "ChangeLog",
                InsertOrUpdate: "ChangeLog/InsertOrUpdate",
            },
            Checklist: {
                AnswerType: "AnswerType",
                ChecklistType: "ChecklistType",
                OptionGroup: "OptionGroup",
                ChecklistInsertOrUpdate: "Checklist/InsertOrUpdate",
                Checklist: "Checklist",
                ChecklistBySubmodule: "Checklist/BySubmodule/:submoduleCode/:checklistTypeCode/:isSra",
                SubModuleChecklist: "SubmoduleChecklist",
                DeleteSubModuleChecklist: "SubmoduleChecklist/Delete",
                ChecklistByModule: "Checklist/ByModule/:moduleCode/:checklistTypeCode/:isSra"
            },
            MA: {
                MANewApplication: "MA/NewApplication",
                MA: "MA/:id",
                MASingle: "MA/Single/:maId",
                MAProduct: "MA/MA/:id",
                MAList: "MA/List",
                SubmoduleFeeType: "FeeType/SubmoduleFee/ByCode/:submoduleCode",
                MADetail: "MA/Single/:id",
                MARenewal: 'MA/Renewal',
                MAVariation: 'MA/Variation',
                MAForRenewal: 'MA/ForRenewal/:userID',
                MAForVariation: 'MA/ForVariation/:userID',
                MALogStatus: 'MALogStatus/History/:maID',
                MAChangeStatus: 'MA/ChangeStatus',
                MAChangeReviewStatus: 'MAReview/InsertOrUpdate/:changeStatus',
                MAChecklist: "MA/MAChecklist/InsertOrUpdate",
                MAChecklistAnswer: "Checklist/Answered/:maId/:submoduleCode/:userId",
                MAUserResponderType: "MAAssignment/ResponderType/:maId/:userId",
                MAReviewWithChecklist: "MAReview/ReviewWithChecklist/:maId/:submoduleCode",
                MAReviewPrintChecklist: "Checklist/Answered/ByType/:maID/:submoduleCode/:checklistTypeCode",
                MACommentTimeline: "MAReview/ByMA/:maID/:statusID",
                Approve: "MA/Approve/:isNotificationType",
                CurrentStatus: "MA/Status/:maID",
                GenerateLabRequest: "MA/Lab/:maID/:userID",
                MAVariationChange: "MA/Variation/Changes/:maId"
            },
            Field: {
                Field: 'Field',
                InsertUpdate: 'Field/MAField/InsertOrUpdate',
                MAFieldById: 'Field/ByMA/:id/:isVariationType',
                FieldByType: 'Field/ByType/:isVariationType',
                SaveField: "Field/MAField",
                SavedMAField: 'Field/MAField/:id/:isVariationType'
            },
            MAAssignment: {
                MAAssignment: 'MAAssignment',
                Grouped: 'MAAssignment/Grouped/:maid'
            },
            ResponderType: {
                ResponderType: 'ResponderType'
            },
            SRA: {
                SRAType: "SRAType",
                SRA: "SRA/:id"
            },
            FastTracking: {
                FastTracking: "FastTrackingItem/:id",
                TherapeuticGroup: "TherapeuticGroup"
            },
            Utility: {
                Identifier: "Utility/Identifier/:key"
            }

        },
        ResourceMethods: {
            All: {
                'query': { method: 'GET', isArray: true },
                'get': { method: 'GET' },
                'update': { method: 'PUT' },
                'save': { method: 'POST' },
                'delete': { method: 'DELETE' },
                'search': { method: 'POST', isArray: true }
            },
            Readonly: {
                'query': { method: 'GET', isArray: true },
                'get': { method: 'GET' }
            },
            Query: { method: 'GET', isArray: true },
            Get: { method: 'GET' },
            Update: { method: 'PUT' },
            Save: { method: 'POST' },
            Delete: { method: 'DELETE' },
            Search: { 'search': { method: 'POST', isArray: true } }
        },
        StorageKeys: {
            UserInfo: "UserInfo",
            Token: "Token",
            Permissions: "Permissions",
            ReturnUrl: "ReturnUrl"
        },
        Modules: {
            ImportPermit: 'IPRM',
            PreImportPermit: 'PIP',
            NewApplication: 'NMR',
            Renewal: 'REN',
            Variation: 'VAR'
        },
        ColorPallets: {
            Chart: [
                '#70c1b3', '#247BA0', '#9ab87a', '#ff1654', '#b2dbbf', '#708b75', '#E55934', '#3FF9F1C', '#f3ffbd', '#f8f991'
            ]
        },
        UIConfig: {
            DataTable: {
                Language: {
                    "decimal": "",
                    "emptyTable": "No data available in table",
                    "info": "Showing _START_ to _END_ of _TOTAL_ entries",
                    "infoEmpty": "Showing 0 to 0 of 0 entries",
                    "infoFiltered": "(filtered from _MAX_ total entries)",
                    "infoPostFix": "",
                    "thousands": ",",
                    "lengthMenu": "Show _MENU_ entries",
                    "loadingRecords": "Loading...",
                    "processing": '<div class="sk-spinner sk-spinner-three-bounce"> <div class="sk-bounce1"></div> <div class="sk-bounce2"></div> <div class="sk-bounce3"></div> </div>',
                    "search": "",
                    "zeroRecords": "No matching records found",
                    "paginate": {
                        "first": "First",
                        "last": "Last",
                        "next": "Next",
                        "previous": "Previous"
                    },
                    "aria": {
                        "sortAscending": ": activate to sort column ascending",
                        "sortDescending": ": activate to sort column descending"
                    },
                    "searchPlaceholder": '  Search ...'
                },
                DOM: {
                    All: "<'col-sm-6'l><'col-sm-6'f>rt<'col-sm-6'i><'col-sm-6'p>",
                    NoSearch: "<'col-sm-6'l><'pull-right'B>rt<'col-sm-6'i><'col-sm-6'p>"

                }
            }
        },
        PhoneWhiteList: [
            { pattern: /^(?:(?:\+?251)|(?:0))11[48](?:[0-9]{6})$/, minLength: 10, maxLength: 13 }
        ],
        SearchAndPaginate: {
            MaxDataCount: 100,
            PageSize: 50
        }

    };
